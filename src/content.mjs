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
      "HCL AppScan",
      "Qualys",
      "SonarQube",
      "Mend",
      "Jenkins",
      "Postman",
      "WAF",
    ],
  },
  {
    title: "Code & architecture",
    icon: "code-xml",
    description: "Read the implementation, not just the findings.",
    items: [
      "Java",
      "Spring",
      "Struts",
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
    id: "citi-vp",
    company: "Citibank",
    short: "Citi",
    role: "Information Tech Lead Analyst",
    level: "Vice President",
    date: "May 2026 - Present",
    year: "2026",
    location: "Fort Lauderdale, FL",
    type: "Professional",
    current: true,
    intro:
      "Leading application security across business-critical enterprise systems.",
    highlights: [
      "Drive secure SDLC adoption, vulnerability governance, and proactive risk reduction across enterprise applications.",
      "Partner with architects, product owners, and engineers to validate and remediate weaknesses in web applications, APIs, and backend services.",
      "Translate SAST, DAST, SCA, and penetration-testing findings into actionable, risk-based remediation guidance.",
      "Evaluate AI-driven code security tools against known vulnerabilities, assessing detection accuracy, false positives, exploitability reasoning, and coverage.",
      "Map AI-generated findings to OWASP Top 10, API security risks, and CWE classifications to assess practical secure SDLC applicability.",
    ],
    tags: [
      "Application security",
      "Secure SDLC",
      "Vulnerability governance",
      "AI security evaluation",
    ],
  },
  {
    id: "citi-avp",
    company: "Citibank",
    short: "Citi",
    role: "Information Tech Senior Analyst",
    level: "Assistant Vice President",
    date: "Feb 2023 - May 2026",
    year: "2023",
    location: "Fort Lauderdale, FL",
    type: "Professional",
    intro:
      "Deep technical assessments, from source code to reproducible attack chains.",
    highlights: [
      "Reviewed Java/Spring services and APIs for authorization flaws, injection, deserialization, business logic issues, and misuse of security controls.",
      "Performed white-box testing across web, mobile, and API services, investigating SSRF, privilege escalation, authentication bypasses, and race conditions.",
      "Authored assessment reports with reproducible proofs of concept and developer-focused remediation guidance.",
      "Correlated scanner findings with code paths and API behavior, prioritizing exploitability, exposure, and data sensitivity.",
      "Led threat modeling and secure design reviews for applications, APIs, and authentication workflows.",
      "Built custom Burp Suite tooling and SAGE, a GitHub-based search automation tool for vulnerable code patterns and recurring security anti-patterns.",
    ],
    tags: [
      "Java / Spring",
      "White-box testing",
      "Burp Suite",
      "Threat modeling",
      "SAGE",
    ],
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
    id: "neu-ta-5001",
    company: "Northeastern University",
    short: "Northeastern",
    role: "Graduate Teaching Assistant",
    level: "CY 5001: Cybersecurity Technologies, Threats, and Defense",
    date: "Sep - Dec 2022",
    year: "2022",
    location: "Boston, MA",
    type: "Research & teaching",
    intro:
      "Helping more than 60 students connect cybersecurity fundamentals to practical work.",
    highlights: [
      "Assisted Professor Sakib Miazi with teaching networks, operating systems, server architectures, and scripting.",
      "Mentored students in network security, system hardening, and threat identification.",
      "Collaborated on labs covering virtualization, containerization, and cloud security fundamentals.",
    ],
    tags: ["Mentorship", "Network security", "Cloud fundamentals"],
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
  },
  {
    id: "neu-ta-5150",
    company: "Northeastern University",
    short: "Northeastern",
    role: "Graduate Teaching Assistant",
    level: "CY 5150: Network Security Practices",
    date: "Sep - Dec 2021",
    year: "2021",
    location: "Boston, MA",
    type: "Research & teaching",
    intro: "Turning network defense theory into hands-on laboratory practice.",
    highlights: [
      "Supported teaching on firewalls, VPNs, wireless security, malware, and Internet security principles.",
      "Guided students through secure configurations, threat analysis, and defensive technologies in controlled labs.",
    ],
    tags: ["Network defense", "Firewalls / VPNs", "Hands-on labs"],
  },
  {
    id: "neu-ta-5010",
    company: "Northeastern University",
    short: "Northeastern",
    role: "Graduate Teaching Assistant",
    level: "CY 5010: Cybersecurity Principles and Practices",
    date: "Jun - Aug 2021",
    year: "2021",
    location: "Boston, MA",
    type: "Research & teaching",
    intro:
      "Building a foundation in information security principles and practice.",
    highlights: [
      "Taught and reinforced confidentiality, integrity, and availability through foundational cybersecurity coursework.",
      "Guided lab work in security controls, risk management, and incident response; evaluated assignments against security practices and governance frameworks.",
    ],
    tags: ["Security principles", "Risk management", "Incident response"],
  },
  {
    id: "azure-skynet",
    company: "Azure Skynet Solutions",
    short: "Azure Skynet",
    role: "Cybersecurity Intern",
    level: "Security Testing",
    date: "May 2020",
    year: "2020",
    location: "Gurugram, India",
    type: "Professional",
    intro:
      "Practical exposure to vulnerability assessment and offensive security fundamentals.",
    highlights: [
      "Completed an internship focused on security operations and foundational offensive security concepts.",
      "Applied vulnerability assessment methodologies to identify and analyze common application and system security issues.",
    ],
    tags: ["Vulnerability assessment", "Security operations"],
  },
  {
    id: "scoutflo",
    company: "Scoutflo",
    short: "Scoutflo",
    role: "Security Intern",
    level: "Infrastructure Security",
    date: "Jun 2019 - Apr 2020",
    year: "2019",
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
      "Automates repository searches for vulnerable code patterns.",
      "Surfaces recurring security anti-patterns for investigation.",
      "Supports earlier triage and remediation across codebases.",
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
    id: "covert-channel",
    number: "03",
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
    number: "04",
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
    id: "burp-tooling",
    number: "05",
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
      "Automates repeated testing patterns during manual assessments.",
      "Supports efficient investigation of application and API behavior.",
      "Complements white-box code review and penetration-testing workflows.",
    ],
    tags: ["Burp Suite", "API security", "Penetration testing"],
    availability: "Professional work; source code is not published.",
  },
  {
    id: "security-pipelines",
    number: "06",
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
      "Integrates SAST, DAST, and SCA testing into Jenkins workflows.",
      "Automates Qualys scanning across application deployments.",
      "Provisions repeatable test environments with Jenkins and PowerShell.",
    ],
    tags: ["Jenkins", "Qualys", "Snyk", "Mend", "PowerShell"],
    availability: "Professional work; source code is not published.",
  },
  {
    id: "job-portal",
    number: "07",
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

export const posts = [
  {
    category: "AI & LLM security",
    title: "LLM security risks: OWASP Top 10 for large language models",
    description:
      "Prompt injection, agentic workflows, and the boundaries that matter.",
    status: "Planned",
  },
  {
    category: "AI & LLM security",
    title: "AI-assisted code audits",
    description:
      "Exploring AST-aware analysis and the role of AI in vulnerability triage.",
    status: "Planned",
  },
  {
    category: "Application security",
    title: "Threat modeling API boundaries",
    description:
      "Authorization, object ownership, and the assumptions behind a REST endpoint.",
    status: "Planned",
  },
  {
    category: "Application security",
    title: "Custom Semgrep rules for Java web applications",
    description:
      "Investigating deserialization risks and making static analysis more precise.",
    status: "Planned",
  },
];
