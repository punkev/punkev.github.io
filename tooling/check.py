"""Validate generated routes, assets, anchors, and accessible document structure."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote
import re

ROOT = Path(__file__).resolve().parents[1] / 'dist'

class Page(HTMLParser):
    def __init__(self, path):
        super().__init__(convert_charrefs=True)
        self.path = path
        self.ids = set()
        self.refs = []
        self.headings = 0
        self.main = 0
        self.current_nav = 0
        self.tabs = []
        self.panels = []
        self.buttons = []
        self.feed(path.read_text(encoding='utf-8'))

    def handle_starttag(self, tag, pairs):
        attrs = dict(pairs)
        if 'id' in attrs:
            assert attrs['id'] not in self.ids, f'{self.path.name}: duplicate id {attrs["id"]}'
            self.ids.add(attrs['id'])
        self.headings += tag == 'h1'
        self.main += tag == 'main'
        self.current_nav += attrs.get('aria-current') == 'page'
        if tag == 'img':
            assert attrs.get('alt'), f'{self.path.name}: image missing alt'
            assert 'width' in attrs and 'height' in attrs, f'{self.path.name}: image missing dimensions'
        if tag in ('a', 'link') and 'href' in attrs:
            self.refs.append(attrs['href'])
        if tag in ('img', 'script') and 'src' in attrs:
            self.refs.append(attrs['src'])
        if tag == 'a' and attrs.get('target') == '_blank':
            assert 'noopener' in attrs.get('rel', ''), f'{self.path.name}: unsafe external tab'
        if 'data-role' in attrs:
            self.tabs.append(attrs)
        if 'data-role-panel' in attrs:
            self.panels.append(attrs)

pages = {p.name: Page(p) for p in ROOT.glob('*.html')}
checked = 0
for name, page in pages.items():
    assert page.headings == 1, f'{name}: expected one h1'
    assert page.main == 1, f'{name}: expected one main landmark'
    if name == '404.html':
        expected_nav = 0
    elif name == 'blogs.html':
        expected_nav = 0
    else:
        expected_nav = 1
    assert page.current_nav == expected_nav, f'{name}: incorrect current navigation'
    for ref in page.refs:
        parsed = urlsplit(ref)
        if parsed.scheme or parsed.netloc:
            continue
        target = (page.path.parent / unquote(parsed.path)).resolve() if parsed.path else page.path
        assert target.is_relative_to(ROOT.resolve()), f'{name}: path outside output: {ref}'
        assert target.is_file(), f'{name}: missing asset or route: {ref}'
        if parsed.fragment and target.suffix == '.html':
            assert parsed.fragment in pages[target.name].ids, f'{name}: missing anchor: {ref}'
        checked += 1
    if page.tabs:
        assert len(page.tabs) == len(page.panels) == 6, f'{name}: missing experience roles'
        for tab, panel in zip(page.tabs, page.panels):
            assert tab['href'] == '#' + panel['id']
            assert panel['aria-labelledby'] == tab['id']

css = (ROOT / 'assets/css/site.css').read_text(encoding='utf-8')
for relative in re.findall(r'url\([\'"]?([^\)\'\"]+)', css):
    assert (ROOT / 'assets/css' / relative).resolve().is_file(), f'Missing CSS asset: {relative}'

print(f'PASS: {len(pages)} pages, {checked} local links/assets, all anchors, image labels, navigation, and 6 career panels.')
