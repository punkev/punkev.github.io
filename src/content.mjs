export const profile = {
  name: "Kevin Dsouza",
  email: "kevin.dsouza.cyber@gmail.com",
  github: "https://github.com/punkev",
  linkedin: "https://www.linkedin.com/in/kevin-dsouza-1906/",
  summary:
    "Application Security Engineer with 5+ years of experience in manual penetration testing, source code review, API security, and DevSecOps across enterprise environments.",
};

export const skills = [
  {
    title: "Application security",
    icon: "shield-check",
    description: "Understand the system. Find the paths that should not exist.",
    items: [
      "Threat modeling",
      "Secure code review",
      "Web penetration testing",
      "API security testing",
      "Risk-based prioritization",
      "Defense-in-depth",
    ],
  },
  {
    title: "AI security",
    icon: "scan-line",
    description: "Judge the tool before you trust the finding.",
    items: [
      "AI code-security evaluation",
      "LLM application security",
      "Prompt injection",
      "OWASP LLM risks",
      "Finding-to-CWE mapping",
    ],
  },
  {
    title: "Secure delivery",
    icon: "workflow",
    description: "Make security part of how software gets built.",
    items: [
      "DevSecOps",
      "CI/CD security",
      "SAST",
      "DAST",
      "SCA",
      "RASP",
      "Secure SDLC",
    ],
  },
  {
    title: "Tools & automation",
    icon: "scan-line",
    description: "Connect useful signals to actionable remediation.",
    items: [
      "Burp Suite",
      "Semgrep",
      "Checkmarx",
      "Snyk",
      "Jenkins",
      "Qualys",
      "SonarQube",
    ],
  },
  {
    title: "Code & architecture",
    icon: "code-xml",
    description: "Read the implementation, not just the findings.",
    items: [
      "Java",
      "Spring",
      "Python",
      "Node.js",
      "Bash / PowerShell",
      "REST APIs",
      "OAuth2",
      "JWT",
      "PKI",
      "Docker",
      "Kubernetes",
      "AWS / Azure",
    ],
  },
];

export const experience = [
  {
    id: "citi",
    company: "Citibank",
    short: "Citi",
    role: "Application Security",
    level: "Vice President",
    date: "Feb 2023 - Present",
    year: "2023",
    location: "Fort Lauderdale, FL",
    type: "Professional",
    current: true,
    intro:
      "From hands-on assessments to how enterprise application security is governed, including which AI security tools are worth trusting.",
    positions: [
      {
        title: "Vice President, Information Tech Lead Analyst",
        date: "May 2026 - Present",
        highlights: [
          "Lead secure SDLC adoption and vulnerability governance for business-critical systems, so risk reduction is part of how software ships.",
          "Set remediation priority with architects, product owners, and engineers so the highest-risk weaknesses in web applications, APIs, and backend services are fixed first.",
          "Evaluate AI-driven code security tools against known vulnerabilities, judging detection accuracy, false positives, exploitability reasoning, and coverage before they are trusted.",
          "Map AI findings to OWASP Top 10, API security risks, and CWE, so a tool suggestion is acted on only when it describes a real weakness.",
        ],
      },
      {
        title: "Assistant Vice President, Information Tech Senior Analyst",
        date: "Feb 2023 - May 2026",
        highlights: [
          "Reviewed Java/Spring services and APIs for authorization flaws, injection, deserialization, business logic issues, and misuse of security controls.",
          "White-box tested web, mobile, and API services for SSRF, privilege escalation, authentication bypasses, and race conditions, and wrote the proof of concept that made each finding reproducible.",
          "Correlated SAST and DAST results with the code path so engineers fixed exploitable issues instead of chasing scanner severity.",
          "Led threat modeling and secure design reviews for applications, APIs, and authentication workflows before weak designs shipped.",
          "Built SAGE and custom Burp tooling so a vulnerable pattern found once could be searched for again, instead of returning in the next review.",
        ],
      },
    ],
    tags: [
      "Application security",
      "Secure SDLC",
      "Vulnerability governance",
      "AI security evaluation",
      "Java / Spring",
      "White-box testing",
      "Burp Suite",
      "Threat modeling",
      "SAGE",
    ],
    projects: ["sage", "burp-tooling"],
  },
  {
    id: "netbrain",
    company: "NetBrain Technologies",
    short: "NetBrain",
    role: "Application Security Engineer Co-op",
    level: "Application Security",
    date: "Jan - Aug 2022",
    year: "2022",
    location: "Burlington, MA",
    type: "Professional",
    intro:
      "Bringing hands-on testing and continuous security validation into software delivery.",
    highlights: [
      "Tested web applications and APIs with Burp Suite and Postman, focusing on authentication, input validation, and business logic.",
      "Triaged SonarQube, Snyk, Qualys, and Mend findings, identifying exploitable vulnerabilities and vulnerable third-party components.",
      "Integrated SAST, DAST, and SCA into Jenkins pipelines, including automated Qualys scanning.",
      "Automated Linux and Windows test environments using Jenkins, PowerShell, and VMware Horizon.",
      "Configured reverse proxies and documented assessment reports, remediation, policies, and security workflows in Confluence.",
    ],
    tags: ["Jenkins", "Burp Suite", "SAST / DAST / SCA", "PowerShell"],
    project: "security-pipelines",
  },
  {
    id: "neu-research",
    company: "Northeastern University",
    short: "Northeastern",
    role: "Security Research Student",
    level: "Information Technology Services",
    date: "Sep - Dec 2022",
    year: "2022",
    location: "Boston, MA",
    type: "Research & teaching",
    note: "Volunteer capstone project; unpaid, not employment.",
    intro:
      "Open-source vulnerability discovery for university-managed web environments.",
    highlights: [
      "Designed an automated framework to discover OWASP Top 10 application risks with open-source scanning tools and normalized results.",
      "Automated live-host discovery across distributed subnets and integrated assessment outputs with centralized logging for risk analysis and remediation tracking.",
    ],
    tags: ["Security research", "Vulnerability discovery", "Automation"],
    project: "scanner",
  },
  {
    id: "neu-ta",
    company: "Northeastern University",
    short: "Northeastern",
    role: "Graduate Teaching Assistant",
    level: "Khoury College of Computer Sciences",
    date: "Jun 2021 - Dec 2022",
    year: "2021",
    location: "Boston, MA",
    type: "Research & teaching",
    intro:
      "Three teaching appointments connecting cybersecurity fundamentals to hands-on practice.",
    positions: [
      {
        title: "CY 5001: Cybersecurity Technologies, Threats, and Defense",
        date: "Sep - Dec 2022",
        highlights: [
          "Assisted Professor Sakib Miazi with teaching networks, operating systems, server architectures, and scripting for a class of 60+ students.",
          "Mentored students in network security, system hardening, and threat identification.",
          "Collaborated on labs covering virtualization, containerization, and cloud security fundamentals.",
        ],
      },
      {
        title: "CY 5150: Network Security Practices",
        date: "Sep - Dec 2021",
        highlights: [
          "Supported teaching on firewalls, VPNs, wireless security, malware, and Internet security principles.",
          "Guided students through secure configurations, threat analysis, and defensive technologies in controlled labs.",
        ],
      },
      {
        title: "CY 5010: Cybersecurity Principles and Practices",
        date: "Jun - Aug 2021",
        highlights: [
          "Taught and reinforced confidentiality, integrity, and availability through foundational cybersecurity coursework.",
          "Guided lab work in security controls, risk management, and incident response; evaluated assignments against security practices and governance frameworks.",
        ],
      },
    ],
    tags: [
      "Mentorship",
      "Network security",
      "Risk management",
      "Hands-on labs",
    ],
  },
  {
    id: "scoutflo",
    company: "Scoutflo",
    short: "Scoutflo",
    role: "Security Intern",
    level: "Infrastructure Security",
    date: "Jun 2018 - Apr 2020",
    year: "2018",
    location: "Thane, India",
    type: "Professional",
    intro:
      "Establishing security foundations across early-stage cloud and on-premises infrastructure.",
    highlights: [
      "Supported Linux and Windows hardening, vulnerability scans, configuration reviews, and patch management.",
      "Helped manage user provisioning, access reviews, and least-privilege controls.",
      "Contributed to secure application setup, credential handling, log monitoring, and basic incident investigation.",
    ],
    tags: ["System hardening", "Access control", "Log monitoring"],
  },
  {
    id: "tcs",
    company: "Tata Consultancy Services",
    short: "TCS",
    role: "Web Development Intern",
    level: "Full-stack Development",
    date: "Jun - Sep 2018",
    year: "2018",
    location: "Thane, India",
    type: "Professional",
    intro:
      "An early foundation in building the applications I would later help secure.",
    highlights: [
      "Developed a full-stack job portal with PHP and MySQL for searching, filtering, and applying to listings.",
      "Implemented authentication, session management, and CRUD operations for job postings.",
    ],
    tags: ["PHP", "MySQL", "Authentication", "Web development"],
    project: "job-portal",
  },
];

export const education = [
  {
    degree: "M.S. in Cybersecurity",
    school: "Northeastern University",
    detail: "Khoury College of Computer Sciences",
    place: "Boston, MA",
    date: "December 2022",
  },
  {
    degree: "B.Tech. in Information Technology",
    school: "Don Bosco Institute of Technology",
    detail: "Mumbai University",
    place: "Mumbai, India",
    date: "October 2020",
  },
];

export const certifications = [
  {
    code: "GAIPS",
    name: "GIAC AI Platform Security",
    date: "November 2026",
    expired: false,
    url: "https://www.credly.com/badges/3f108892-73cf-44f4-a2f4-f4421c11cd26",
  },
  {
    code: "GWEB",
    name: "GIAC Certified Web Application Defender",
    date: "August 2025",
    expired: false,
  },
  {
    code: "GWAPT",
    name: "GIAC Web Application Penetration Tester",
    date: "November 2023",
    expired: false,
  },
  {
    code: "Security+",
    name: "CompTIA Security+",
    date: "October 2021",
    expired: true,
  },
  {
    code: "CEH v10",
    name: "Certified Ethical Hacker",
    date: "December 2020",
    expired: true,
  },
];

export const projects = [
  {
    id: "sage",
    number: "01",
    name: "SAGE",
    subtitle: "Security search automation",
    category: "Security engineering",
    context: "Built at Citi",
    icon: "code-xml",
    theme: "mint",
    description:
      "Finding vulnerable code patterns before they become recurring security issues.",
    overview:
      "A GitHub-based security search automation tool developed during my work at Citi. SAGE identifies vulnerable code patterns and recurring security anti-patterns across repositories to accelerate triage and support early remediation.",
    points: [
      "Turns a review idea, such as a missing authorization check or an unsafe deserialization sink, into a repeatable search across repositories.",
      "Groups matches so the same weakness can be triaged once instead of repo by repo.",
      "Gives reviewers a head start before that pattern shows up again in a penetration test.",
    ],
    tags: ["GitHub", "Code review", "Security automation"],
    availability: "Professional work; source code is not published.",
  },
  {
    id: "scanner",
    number: "02",
    name: "Open-source security scanner",
    subtitle: "Vulnerability discovery framework",
    category: "Security engineering",
    context: "Northeastern capstone",
    icon: "scan-line",
    theme: "blue",
    image: "scanner-report.png",
    report: "capstone-open-source-security-scanner.pdf",
    description:
      "One pipeline. Multiple scanners. A clearer view of application risk.",
    overview:
      "An open-source scanning framework built for Northeastern University ITS as a volunteer capstone. Jenkins orchestrates containerized tools and Python normalizes JSON/XML reports into unified summaries.",
    points: [
      "Integrates OWASP ZAP, Nikto, and testssl.sh for application, server, and TLS assessment.",
      "Orchestrates scoped scanning jobs with Jenkins and Docker.",
      "Normalizes tool output to support risk analysis and remediation tracking.",
    ],
    tags: ["Python", "Jenkins", "OWASP ZAP", "Docker", "Nikto", "testssl.sh"],
  },
  {
    id: "security-pipelines",
    number: "03",
    name: "Security in the pipeline",
    subtitle: "Continuous security validation",
    category: "Security engineering",
    context: "Built at NetBrain",
    icon: "workflow",
    theme: "blue",
    description:
      "Connecting application releases to repeatable security checks.",
    overview:
      "Jenkins pipelines integrating static, dynamic, and software composition analysis into application releases, alongside repeatable Linux and Windows security test environments.",
    points: [
      "Runs SAST, DAST, and SCA in the Jenkins release path, including Qualys scans against the deployed application.",
      "Rebuilds the same Linux and Windows test beds with Jenkins and PowerShell so a finding can be rechecked on the next build.",
      "Attaches scanner output to the release and leaves the severity call with the engineer, not the tool.",
    ],
    tags: ["Jenkins", "Qualys", "Snyk", "Mend", "PowerShell"],
    availability: "Professional work; source code is not published.",
  },
  {
    id: "burp-tooling",
    number: "04",
    name: "Burp Suite custom tooling",
    subtitle: "Assessment workflow automation",
    category: "Security engineering",
    context: "Built at Citi",
    icon: "fingerprint",
    theme: "mint",
    description:
      "Less repetitive testing. More time for the hard-to-find vulnerabilities.",
    overview:
      "Custom Burp Suite tooling and workflows developed to automate repetitive testing patterns and accelerate vulnerability discovery during application security assessments.",
    points: [
      "Replays authenticated API sequences so object-level authorization can be checked without rebuilding each request.",
      "Keeps manual testing on the behavior scanners miss: session handling, business logic, and multi-step workflows.",
      "Feeds what the proxy shows back into white-box review of the same endpoint.",
    ],
    tags: ["Burp Suite", "API security", "Penetration testing"],
    availability: "Professional work; source code is not published.",
  },
  {
    id: "covert-channel",
    number: "05",
    name: "TCP covert channel",
    subtitle: "Network security research",
    category: "Research",
    context: "Academic research",
    icon: "network",
    theme: "rose",
    image: "covert-report.png",
    report: "covert-network-channel-report.pdf",
    description:
      "Understanding covert communication to better recognize its traces.",
    overview:
      "A research implementation exploring covert communication through TCP source-port fields and its visibility to network monitoring tools. The report examines the channel, traffic observations, and defensive mitigations.",
    points: [
      "Built a client-server channel with encoded, encrypted payloads and integrity checking.",
      "Analyzed packet captures with Wireshark and evaluated detection using Snort.",
      "Documented packet normalization and protocol anomaly detection as defensive strategies.",
    ],
    tags: ["Python / Scapy", "TCP/IP", "Wireshark", "Snort", "AES"],
  },
  {
    id: "wireless",
    number: "06",
    name: "802.11 deauthentication",
    subtitle: "Wireless security research",
    category: "Research",
    context: "Academic research",
    icon: "radio",
    theme: "amber",
    image: "wireless-report.png",
    report: "deauthentication-attack-research-paper.pdf",
    description:
      "Examining the trust assumptions behind wireless management frames.",
    overview:
      "An academic investigation into unauthenticated 802.11 management frames and their availability risks. The study uses an ESP8266-based test setup and considers Protected Management Frames as a mitigation.",
    points: [
      "Studied spoofed deauthentication frames and their effect on wireless availability.",
      "Examined beacon spoofing and probe-request floods in a research setup.",
      "Analyzed 802.11w Protected Management Frames as a security control.",
    ],
    tags: ["IEEE 802.11", "ESP8266", "C++", "Wireless security"],
  },
  {
    id: "job-portal",
    number: "Earlier",
    earlier: true,
    name: "Full-stack job portal",
    subtitle: "Web application development",
    category: "Development",
    context: "Built at TCS",
    icon: "layers",
    theme: "rose",
    description:
      "Building an end-to-end application, from listings to authentication.",
    overview:
      "A PHP and MySQL job portal developed during my internship at Tata Consultancy Services. The application supports job discovery and applications through a dynamic interface.",
    points: [
      "Built job search, filtering, and application flows.",
      "Implemented user authentication and session management.",
      "Created CRUD operations for job postings backed by MySQL.",
    ],
    tags: ["PHP", "MySQL", "Full-stack development"],
    availability: "Internship project; source code is not published.",
  },
];

export const posts = [];
