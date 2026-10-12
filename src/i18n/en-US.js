export default {
  nav: {
    home: "Home",
    projects: "Projects",
    business: "Business",
    about: "About Me",
    contact: "Contact"
  },
  common: {
    toggleTheme: "Toggle theme",
    toggleNav: "Toggle navigation",
    skipToContent: "Skip to content",
    language: "Language",
    switchToEnglish: "Switch to English",
    switchToPortuguese: "Switch to Portuguese",
    englishCode: "EN",
    portugueseCode: "PT"
  },
  footer: {
    developedBy: "Developed by"
  },
  routes: {
    home: {
      title: "Yan Penalva — Software Engineer",
      description: "Yan Penalva — Software Engineer portfolio. Projects, experience and contact."
    },
    about: {
      title: "About — Yan Penalva",
      description: "About Yan Penalva: experience and background."
    },
    projects: {
      title: "Projects — Yan Penalva",
      description: "Selected projects by Yan Penalva."
    },
    business: {
      title: "Business — Yan Penalva",
      description: "Enterprise systems and infrastructure work."
    },
    contact: {
      title: "Contact — Yan Penalva",
      description: "Contact Yan Penalva."
    },
    notFound: {
      title: "Not found — Yan Penalva",
      description: "Page not found.",
      heading: "Page not found",
      message: "The page you are looking for does not exist.",
      backHome: "Back to home"
    }
  },
  home: {
    role: "Senior Software Engineer · Laravel / Vue",
    heroStatement: "I build web systems and applied AI, and contribute to open-source software.",
    resumePt: "Resume (PT-BR)",
    resumeEn: "Resume (EN-US)",
    featuredTitle: "Selected work",
    aiOssTitle: "AI & open source",
    openProject: "View project",
    metricsAriaLabel: "Experience and project metrics",
    experienceTitle: "Experience",
    metricsTitle: "",
    contactTitle: "Let's work together",
    contactText: "Have a project, role, or idea? Get in touch.",
    contactButton: "Discuss a role or project",
    projectButton: "I have a project",
    jobButton: "I have a role",
    projectMessage: "Hi, Yan! I have a project: [problem/scope/timeline]. Can we talk?",
    jobMessage: "Hi, Yan! I have a role: [title/modality/location]. Can we talk?",
    emailButton: "Email me"
  },
  about: {
    metricsExperience: "Years of experience",
    metricsProjects: "Projects completed",
    bio1: "I’m a software engineer with 6 years of experience building and evolving enterprise systems, from architecture and infrastructure to performance, maintainability, and software quality.",
    bio2: "Today I’m a Senior Software Engineer at PRODEB, leading the architecture and evolution of SIIC v2 for SECULT Bahia, with modular design, automated quality, and AI-assisted development workflows.",
    bio3: "Before returning to PRODEB, I spent three years at Netra Tecnologia building Laravel and Vue APIs, and earlier shipped seven production university systems at UEFS, alongside DevOps work with Docker, Kubernetes and GNU/Linux. I also maintain open-source starter kits and study applied AI, from log anomaly detection to agent context tooling.",
  },
  creds: {
    title: "Credentials",
    items: {
      ads: {
        name: "Technology Degree in Systems Analysis and Development",
        org: "UNIFACS",
        period: "2019–2022"
      },
      softwareEngineering: {
        name: "Postgraduate in Software Engineering",
        org: "UNOPAR",
        period: "2023–2024"
      },
      solutionArchitecture: {
        name: "Postgraduate in Solutions Architecture",
        org: "UNOPAR",
        period: "2024–2025"
      },
      softwareArchitecture: {
        name: "Postgraduate in Software Architecture",
        org: "UNOPAR",
        period: "2024–2025"
      },
      english: {
        name: "Professional English",
        org: "EF B2",
        period: "2022"
      },
      datadog: {
        name: "Datadog Foundation",
        org: "Datadog",
        period: "2025"
      },
      cleanArchitecture: {
        name: "Clean Architecture and Clean Code",
        org: "branas.io",
        period: "2024"
      }
    }
  },
  inspect: {
    links: {
      auth: {
        label: "Authorization and HTTP boundaries",
        hint: "Review the domain policy alongside the thin login controller to see authorization kept apart from HTTP handling."
      },
      rbac: {
        label: "Aggregate-level RBAC and audit",
        hint: "Inspect how permission changes are handled through a role aggregate and recorded for audit."
      },
      tests: {
        label: "Tested RBAC matrix",
        hint: "Check how the RBAC ability matrix exercises authorization behavior."
      },
      health: {
        label: "Health and request correlation",
        hint: "Review the health endpoint and correlation middleware as the API's observability boundary."
      },
      feAuth: {
        label: "Client-side authorization and generated API",
        hint: "Review client-side authorization, the auth API client generated through orval.config.ts, and strict TypeScript settings."
      },
      feTests: {
        label: "Co-located Vitest tests",
        hint: "Review Vitest tests co-located with their implementation files for focused behavior coverage."
      }
    }
  },
  metrics: {
    experience: "Years of experience",
    projects: "Projects delivered"
  },
  projects: {
    title: "Projects",
    hint: "Search projects by title or filter by category",
    searchPlaceholder: "Search Projects",
    searchAria: "Search Projects",
    empty: "No projects found.",
    allLabel: "All Projects",
    moreLabel: "More projects:",
    filterLabel: "Filter by category",
    deployLabel: "Open live demo",
    viewCode: "View code",
    siteLabel: "Open website",
    packageLabel: "View package",
    inspectTitle: "Where to look",
    categories: {
      "Web Application": "Web Application",
      "API Application": "API Application",
      "AI Applications": "AI Applications",
      "Themes": "Themes",
    },
    items: {
      "1": {
        title: "PHPenalva",
        description: "A micro-framework for PHP with MVC pattern and REST API.",
      },
      "5": {
        title: "API Laravel IBGE",
        description: "A Rest API querying IBGE with CRUD and unit tests.",
      },
      "8": {
        title: "PHPenalva URL Shortener",
        description: "A sleek, efficient URL shortening tool built with the PHPenalva microframework.",
      },
      "12": {
        title: "Whisper Subtitle Automation",
        description: "Whisper Subtitle Automation is a tool designed to streamline the process of generating subtitles for videos using advanced AI techniques.",
      },
      "9": {
        title: "Suitability System",
        description: "The Suitability System was developed to run both on the client's website and in the application. It offers a set of questions and answers that, when completed, determine the client's investment profile.",
      },
      "11": {
        title: "PenPen Deep Focus VsCode Theme",
        description: "The PenPen Deep Focus theme for Visual Studio Code is designed to provide a distraction-free coding environment, with a focus on clarity and readability.",
      },
      "13": {
        title: "Starter Kit API",
        description: "Laravel REST API starter kit with authentication, RBAC, testing, and observability.",
      },
      "14": {
        title: "Starter Kit Frontend",
        description: "Vue 3 starter kit with Vue, Quasar, TypeScript, and automated testing.",
      },
      "15": {
        title: "Log Anomaly Detector",
        description: "Log anomaly detection with PHP, Flight and PHP-ML using machine learning and clustering techniques.",
      },
      "16": {
        title: "Anki Lingo",
        description: "AI-powered daily English flashcards automatically generated and synced with Anki.",
      },
      "17": {
        title: "Context Spec Develop",
        description: "Installable, agent-neutral context and delivery workflow for AI coding agents.",
      },
      "18": {
        title: "1º Protesto São Luís",
        description: "Official website for the 1st Protest Notary Office of São Luís, Maranhão, built with Laravel 13, Inertia 3, Vue 3, TypeScript, and Tailwind 4.",
        role: "Developer",
      },
      "19": {
        title: "NeoNews",
        description: "News portal hosting the Suitability appraisal application.",
      },
    },
  },
  experience: {
    "prodeb-senior": {
      title: "Senior Software Engineer",
      org: "PRODEB",
      mode: "On-site",
      periodLabel: "Jun 2026 – Present",
      summary: "Leading the architecture and evolution of SIIC v2 for SECULT-BA: modular design and Clean Architecture with Laravel, Vue.js, PostgreSQL and Redis; DevOps with Docker, Kubernetes (cluster setup and migration), CI/CD and GNU/Linux; AI-assisted and context engineering workflows adopted across teams; test coverage above 90% with the roadmap about two months ahead of schedule."
    },
    netra: {
      title: "Software Engineer",
      org: "Netra Tecnologia",
      mode: "Remote",
      periodLabel: "Sep 2023 – Jun 2026",
      summary: "Improved API performance by 45% through caching and query optimization, and led CI/CD automation that increased deployments by 80%.",
    },
    prodeb: {
      title: "Software Engineer",
      org: "PRODEB",
      mode: "Hybrid",
      periodLabel: "Feb 2022 – Sep 2023",
      summary: "Delivered Laravel and Vue features and REST APIs, integrating PostgreSQL and Redis and supporting Kubernetes-based microservices.",
    },
    ramiro: {
      title: "Junior Software Engineer",
      org: "Grupo Ramiro Campelo",
      mode: "On-site",
      periodLabel: "Nov 2021 – Feb 2022",
      summary: "Developed e-commerce integrations and reduced order API failures by 25% through improvements to the purchasing system integration.",
    },
    trt5: {
      title: "Intern Software Engineer",
      org: "TRT5",
      mode: "Remote",
      periodLabel: "Aug 2020 – Nov 2021",
      summary: "Worked on security incident response and penetration testing, reducing vulnerabilities by 30% and integrating OpenVAS with Zabbix using Python.",
    },
  },
  business: {
    enterpriseTitle: "Enterprise Projects",
    enterpriseHint: "Enterprise systems",
    infraTitle: "Infrastructure & API Projects",
    infraHint: "Key contributions to system modernization, authentication, and API orchestration",
    roleLabel: "Role:",
    techLabel: "Tech:",
    referenceLabel: "Reference:",
    deployLabel: "Live deploy",
    statusDev: "In development",
    statusLegacy: "Not in production",
    internalTag: "Internal system",
    systems: {
      "1": {
        title: "SISPPPG",
        role: "System Architect / Senior Software Engineer / DevOps",
        description: "System for managing graduate programs and research projects, similar to SISTEX but focused on academic programs and project tracking.",
      },
      "2": {
        title: "SISTEX",
        role: "System Architect / Senior Software Engineer / DevOps",
        description: "University Extension System. Manages projects, plans and activity reports.",
      },
      "3": {
        title: "SIPAE",
        role: "System Architect / Senior Software Engineer / DevOps",
        description: "Integrated Student Aid System. Manages scholarships and student benefits.",
      },
      "4": {
        title: "SIDOC",
        role: "Senior Software Engineer / DevOps",
        description: "Document management and administrative workflow system.",
      },
      "5": {
        title: "SIGRH",
        role: "Senior Software Engineer / DevOps",
        description: "Human Resources Management System for academic and technical staff.",
      },
      "6": {
        title: "SIAC",
        role: "Senior Software Engineer / DevOps",
        description: "Academic and Cultural Activities System. Manages public courses, workshops and events offered by the university.",
      },
      "7": {
        title: "SGP",
        role: "Senior Software Engineer / DevOps",
        description: "Institutional Project Management System.",
      },
      "8": {
        title: "SIIC v2",
        description: "New version of SECULT Bahia's cultural information and indicators system: modular design, Clean Architecture and automated quality.",
      },
    },
    infra: {
      "1": {
        title: "Institutional Login Platform",
        role: "System Architect / Senior Software Engineer",
        description: "Implemented the university's unified authentication service, enabling login through institutional credentials and centralized access control across all systems.",
      },
      "2": {
        title: "SAC Bahia API Orchestration",
        role: "Backend Engineer / API Specialist",
        description: "Participated in the development of APIs and orchestration layer that manage appointments and services for the SAC Bahia network (Prodeb).",
      },
      "3": {
        title: "FUNDEF Court-Ordered Payments System",
        role: "Backend Engineer / Data Integration Specialist",
        description: "Developed and supported the management of FUNDEF precatory payments for the State of Bahia, ensuring transparency and compliance in resource allocation.",
      },
      "4": {
        title: "CI/CD Pipelines Modernization",
        role: "DevOps Engineer",
        description: "Created and modernized Jenkins and GitLab CI pipelines to automate deployment, testing, and code quality checks across multiple projects.",
      },
      "5": {
        title: "Internal Container Registry Implementation",
        role: "DevOps Engineer / System Administrator",
        description: "Designed and deployed internal container registries using Harbor to manage and secure Docker images within the organization’s infrastructure.",
      },
    },
  },
  contact: {
    title: "Contact details",
    location: "Salvador, Bahia, Brazil",
    whatsappMessage: "Hi, Yan! I saw your portfolio and would like to talk.",
    timezone: "UTC−3 · America/Bahia",
    modality: "Preferred: remote · open to on-site/hybrid · available for relocation if needed",
    whatsappLabel: "WhatsApp",
  },
  hireTitle: "Let's build something reliable.",
  hireText: "I build and evolve web systems, APIs, infrastructure, and applied AI solutions. Tell me what you're working on and what needs to move forward.",
  hireServicesTitle: "Ways I can help",
  hireServices: {
    "1": {
      title: "Web systems",
      text: "Modular web applications built and evolved with Laravel and Vue, with PostgreSQL and Redis when the project calls for them."
    },
    "2": {
      title: "REST APIs",
      text: "API design and implementation, including integrations, authentication, testing, and observability."
    },
    "3": {
      title: "DevOps",
      text: "Containerized infrastructure and delivery with Docker, Kubernetes, CI/CD, and GNU/Linux—from cluster setup to automated pipelines."
    },
    "4": {
      title: "Applied AI",
      text: "Practical AI work, from log anomaly detection and AI-assisted development to context tooling for coding agents."
    }
  },
  hireStepsTitle: "How we work",
  hireSteps: {
    "1": {
      title: "Conversation",
      text: "We discuss your context, goals, and constraints."
    },
    "2": {
      title: "Scope",
      text: "We align on requirements, priorities, and what is included."
    },
    "3": {
      title: "Proposal",
      text: "I present an approach and proposal based on the agreed scope."
    },
    "4": {
      title: "Delivery",
      text: "I execute the agreed work and share progress through delivery."
    }
  },
  hireAvailabilityTitle: "Availability",
  hireFaqTitle: "Frequently asked questions",
  hireFaq: {
    "1": {
      q: "What are your typical project timelines?",
      a: "I reply within 24 hours. After talking with you, I send an estimate within 3 business days. Timelines vary with scope: something simple can go live in a few days, something complex takes longer — it depends on the size of the delivery."
    },
    "2": {
      q: "Are you open to signing an NDA or contract?",
      a: "Yes. I work with service contracts — freelance and PJ — and I sign NDAs whenever the project requires it."
    },
    "3": {
      q: "How do you structure your pricing and billing?",
      a: "Flexible and to be agreed: hourly, fixed scope or monthly — always with fast deliveries."
    }
  },
  hireCtaTitle: "Have a project in mind?",
  hireCtaText: "Share a little context and let's discuss the next step.",
  hireWhatsAppCta: "Start a conversation on WhatsApp",
  hireEmailCta: "Send me an email"
};
