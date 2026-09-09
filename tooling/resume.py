"""Render the supplied Markdown CV as the portfolio's downloadable resume."""
import re
import sys
from html import escape
from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, KeepTogether

source, destination = map(Path, sys.argv[1:3])
styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name='CVName', fontName='Helvetica-Bold', fontSize=25, leading=29, spaceAfter=9, textColor=colors.HexColor('#123f30')))
styles.add(ParagraphStyle(name='CVSection', fontName='Helvetica-Bold', fontSize=11, leading=15, spaceBefore=17, spaceAfter=8, textColor=colors.HexColor('#123f30'), keepWithNext=True))
styles.add(ParagraphStyle(name='CVBody', fontName='Helvetica', fontSize=9, leading=13, spaceAfter=6))
styles.add(ParagraphStyle(name='CVRole', parent=styles['CVBody'], keepWithNext=True))
styles.add(ParagraphStyle(name='CVBullet', parent=styles['CVBody'], leftIndent=10, firstLineIndent=-8, spaceAfter=5))

def inline(value):
    value = value.replace('&nbsp;', ' ').replace('\\', '').replace('\u2013', '-').replace('\u2014', '-').strip()
    value = escape(value)
    value = re.sub(r'\[([^\]]+)\]\(([^)]+)\)', r'<link href="\2" color="#176449">\1</link>', value)
    value = re.sub(r'\*\*\*(.*?)\*\*\*', r'<b><i>\1</i></b>', value)
    value = re.sub(r'\*\*(.*?)\*\*', r'<b>\1</b>', value)
    return re.sub(r'\*(.*?)\*', r'<i>\1</i>', value)

story = []
lines = [line for line in source.read_text(encoding='utf-8-sig').splitlines() if line.strip() and line.strip() not in ('---', '&nbsp;')]
for index, raw in enumerate(lines):
    line = raw.strip()
    if not line or line in ('---', '&nbsp;'):
        continue
    if line.startswith('# '):
        story.append(Paragraph(inline(line[2:]), styles['CVName']))
    elif line.startswith('### '):
        story.append(Paragraph(inline(line[4:]), styles['CVSection']))
    elif line.startswith('\u2022 '):
        story.append(Paragraph('- ' + inline(line[2:]), styles['CVBullet']))
    else:
        next_is_role = index + 1 < len(lines) and lines[index + 1].strip().startswith('***')
        style = styles['CVRole'] if line.startswith('*') or next_is_role else styles['CVBody']
        story.append(Paragraph(inline(line), style))

def footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(colors.HexColor('#d5dfd8'))
    canvas.line(45, 36, 567, 36)
    canvas.setFont('Helvetica', 8)
    canvas.setFillColor(colors.HexColor('#54665b'))
    canvas.drawString(45, 23, 'Kevin Dsouza | Application Security Engineer')
    canvas.drawRightString(567, 23, str(doc.page))
    canvas.restoreState()

doc = SimpleDocTemplate(str(destination), pagesize=(612, 792), rightMargin=45, leftMargin=45, topMargin=40, bottomMargin=49, title='Kevin Dsouza - Resume', author='Kevin Dsouza')
doc.build(story, onFirstPage=footer, onLaterPages=footer)
print(f'Rendered {destination.name}')
