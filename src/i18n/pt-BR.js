import routeMetadata from "./routeMetadata.json";

export default {
  nav: {
    home: "Início",
    projects: "Projetos",
    business: "Empresarial",
    about: "Sobre",
    contact: "Contato"
  },
  common: {
    toggleTheme: "Alternar tema",
    toggleNav: "Alternar navegação",
    skipToContent: "Pular para o conteúdo",
    language: "Idioma",
    switchToEnglish: "Mudar para inglês",
    switchToPortuguese: "Mudar para português",
    englishCode: "EN",
    portugueseCode: "PT"
  },
  footer: {
    developedBy: "Desenvolvido por"
  },
  routes: routeMetadata.locales["pt-BR"],
  home: {
    role: "Engenheiro de Software Sênior",
    heroStatement: "Desenvolvo sistemas web e soluções de IA e contribuo com software de código aberto.",
    heroPanelTitle: "Console de entrega",
    heroPanelReady: "PRONTO PARA ENTREGAR",
    heroPanelSignal1: "Sistemas web confiáveis",
    heroPanelSignal2: "IA aplicada na prática",
    heroPanelSignal3: "Contribuições open source",
    resumePt: "Currículo (PT-BR)",
    resumeEn: "Currículo (EN-US)",
    featuredTitle: "Trabalhos selecionados",
    aiOssTitle: "IA e código aberto",
    openProject: "Ver projeto",
    metricsAriaLabel: "Indicadores de experiência e projetos",
    experienceTitle: "Experiência",
    metricsTitle: "",
    contactTitle: "Vamos trabalhar juntos",
    contactText: "Tem um projeto, vaga ou ideia? Entre em contato.",
    contactButton: "Conversar sobre vaga ou projeto",
    projectButton: "Tenho um projeto",
    jobButton: "Tenho uma vaga",
    projectMessage: "Olá, Yan! Tenho um projeto: [problema/escopo/prazo]. Podemos conversar?",
    jobMessage: "Olá, Yan! Tenho uma vaga: [cargo/modalidade/local]. Podemos conversar?",
    emailButton: "Me envie um email"
  },
  cases: {
    title: "Casos de resultado",
    text: "Intervenções e resultados mensuráveis em projetos recentes.",
    ongoing: "Em andamento",
    problem: "Problema",
    action: "Ação",
    result: "Resultado",
    netra: {
      problem: "APIs lentas e deploys manuais",
      action: "cache Redis/Elasticsearch, otimização de queries, pipelines GitLab CI com SonarQube e Docker",
      result: "+45% desempenho das APIs, +80% deploys",
      metric: "+45%",
      metricLabel: "desempenho das APIs"
    },
    siic: {
      problem: "sistema legado a evoluir",
      action: "design modular, Clean Architecture, qualidade automatizada, CI/CD",
      result: "roadmap ~2 meses adiantado, cobertura >90%"
    }
  },
  about: {
    metricsExperience: "Anos de experiência",
    metricsProjects: "Projetos concluídos",
    bio1: "Sou engenheiro de software com 6 anos de experiência construindo e evoluindo sistemas corporativos, da arquitetura e infraestrutura ao desempenho, à manutenibilidade e à qualidade de software.",
    bio2: "Hoje sou Engenheiro de Software Sênior na PRODEB, liderando a arquitetura e evolução do SIIC v2 para a SECULT Bahia, com design modular, qualidade automatizada e fluxos de desenvolvimento assistido por IA.",
    bio3: "Antes de voltar à PRODEB, passei três anos na Netra Tecnologia construindo APIs em Laravel e Vue, e antes entreguei sete sistemas universitários em produção na UEFS, além de trabalho DevOps com Docker, Kubernetes e GNU/Linux. Também mantenho starter kits open source e estudo IA aplicada, de detecção de anomalias em logs a ferramentas de contexto para agentes.",
  },
  creds: {
    title: "Formação e certificações",
    items: {
      ads: {
        name: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
        org: "UNIFACS",
        period: "2019–2022"
      },
      softwareEngineering: {
        name: "Pós-graduação em Engenharia de Software",
        org: "UNOPAR",
        period: "2023–2024"
      },
      solutionArchitecture: {
        name: "Pós-graduação em Arquitetura de Soluções",
        org: "UNOPAR",
        period: "2024–2025"
      },
      softwareArchitecture: {
        name: "Pós-graduação em Arquitetura de Software",
        org: "UNOPAR",
        period: "2024–2025"
      },
      english: {
        name: "Inglês profissional",
        org: "EF B2",
        period: "2022"
      },
      datadog: {
        name: "Datadog Foundation",
        org: "Datadog",
        period: "2025"
      },
      cleanArchitecture: {
        name: "Clean Architecture e Clean Code",
        org: "branas.io",
        period: "2024"
      }
    }
  },
  inspect: {
    links: {
      auth: {
        label: "Fronteiras de autorização e HTTP",
        hint: "Avalie a policy do domínio junto ao controller de login enxuto para ver a autorização separada do tratamento HTTP."
      },
      rbac: {
        label: "RBAC por agregado e auditoria",
        hint: "Inspecione como as mudanças de permissões são tratadas pelo agregado de função e registradas para auditoria."
      },
      tests: {
        label: "Matriz RBAC testada",
        hint: "Veja como a matriz de abilities RBAC exercita o comportamento de autorização."
      },
      health: {
        label: "Health e correlação de requisições",
        hint: "Avalie o endpoint de health e o middleware de correlação como fronteira de observabilidade da API."
      },
      feAuth: {
        label: "Autorização no client e API gerada",
        hint: "Avalie a autorização no client, o cliente da API de autenticação gerado via orval.config.ts e as configurações estritas de TypeScript."
      },
      feTests: {
        label: "Testes Vitest co-localizados",
        hint: "Avalie os testes Vitest junto aos arquivos de implementação para verificar comportamentos de forma focada."
      }
    }
  },
  metrics: {
    experience: "Anos de experiência",
    projects: "Projetos entregues"
  },
  projects: {
    title: "Projetos",
    hint: "Pesquise projetos por título ou filtre por categoria",
    searchPlaceholder: "Pesquisar Projetos",
    searchAria: "Pesquisar Projetos",
    empty: "Nenhum projeto encontrado.",
    clientTitle: "Projetos para clientes",
    clientHint: "Entregues para clientes e em produção.",
    allLabel: "Todos os Projetos",
    moreLabel: "Mais projetos:",
    filterLabel: "Filtrar por categoria",
    deployLabel: "Abrir demonstração",
    viewCode: "Ver código",
    siteLabel: "Abrir site",
    packageLabel: "Ver pacote",
    inspectTitle: "Onde olhar",
    cubeTitle: "Um problema resolvido passo a passo",
    cubeReplay: "Reproduzir novamente",
    cubeReplayAria: "Reproduzir o embaralhamento e a solução do cubo",
    cubeBrowse: "Ver a lista de projetos",
    categories: {
      "Web Application": "Aplicação Web",
      "API Application": "Aplicação API",
      "AI Applications": "Aplicações de IA",
      "Themes": "Temas",
      "Mobile Application": "Aplicação Mobile",
      "CLI Tool": "Ferramenta CLI",
    },
    items: {
      "1": {
        title: "PHPenalva",
        description: "O PHPenalva é um framework PHP leve, pensado para desenvolver aplicações web e APIs diretas. Oferece uma estrutura enxuta e ferramentas essenciais para acelerar o desenvolvimento e organizar o código.",
      },
      "5": {
        title: "API Laravel IBGE",
        description: "Uma API Rest que consulta o IBGE com CRUD e testes unitários.",
      },
      "8": {
        title: "PHPenalva URL Shortener",
        description: "Uma ferramenta de encurtamento de URL elegante e eficiente, construída com o microframework PHPenalva.",
      },
      "12": {
        title: "Whisper Subtitle Automation",
        description: "O Whisper Subtitle Automation é uma ferramenta criada para simplificar o processo de geração de legendas para vídeos usando técnicas avançadas de IA.",
      },
      "9": {
        title: "Suitability System",
        description: "O Suitability System foi desenvolvido para rodar tanto no site do cliente quanto na aplicação. Ele oferece um conjunto de perguntas e respostas que, quando respondidas, determinam o perfil de investimento do cliente.",
      },
      "11": {
        title: "PenPen Deep Focus VsCode Theme",
        description: "O tema PenPen Deep Focus para o Visual Studio Code foi projetado para proporcionar um ambiente de programação livre de distrações, com foco em clareza e legibilidade.",
      },
      "13": {
        title: "Starter Kit API",
        description: "Kit inicial para API REST em Laravel, com autenticação, RBAC, testes e observabilidade.",
      },
      "14": {
        title: "Starter Kit Frontend",
        description: "Kit inicial para Vue 3 com Vue, Quasar, TypeScript e testes automatizados.",
      },
      "15": {
        title: "Log Anomaly Detector",
        description: "Detecção de anomalias em logs com PHP, Flight e PHP-ML, usando aprendizado de máquina e técnicas de agrupamento.",
      },
      "16": {
        title: "Anki Lingo",
        description: "Flashcards diários de inglês com IA, gerados automaticamente e sincronizados com o Anki.",
      },
      "17": {
        title: "Context Spec Develop",
        description: "Kit de desenvolvimento neutro em relação a agentes e centrado em conversa: do contexto à mudança verificada em produção.",
      },
      "18": {
        title: "1º Protesto São Luís",
        description: "Site institucional do 1º Tabelionato de Protesto de São Luís-MA, desenvolvido com Laravel 13, Inertia 3, Vue 3, TypeScript e Tailwind 4.",
        role: "Desenvolvedor",
      },
      "20": {
        title: "Starter Kit Laravue",
        description: "O Starter Kit Laravue é um template de projeto que acelera o início do desenvolvimento. Combina Laravel e Vue 3, com um backend robusto e um frontend reativo.",
      },
      "21": {
        title: "Fuelwise",
        description: "O Fuelwise é um aplicativo Android em Flutter, offline-first, que compara etanol e gasolina a partir dos preços e da eficiência do veículo informados pelo usuário.",
      },
      "22": {
        title: "Syspeek",
        description: "Script Bash leve e portátil que oferece uma visão rápida da saúde do sistema: CPU, memória, disco, swap, inodes, rede e temperatura, em formato legível. Ideal para monitoramento no terminal.",
      },
    },
  },
  experience: {
    "prodeb-senior": {
      title: "Engenheiro de Software Sênior",
      org: "PRODEB",
      mode: "Presencial",
      periodLabel: "Jun 2026 – Atual",
      summary: "Liderando a arquitetura e evolução do SIIC v2 para a SECULT-BA: design modular e Clean Architecture com Laravel, Vue.js, PostgreSQL e Redis; DevOps com Docker, Kubernetes (criação e migração de clusters), CI/CD e GNU/Linux; fluxos de desenvolvimento assistido por IA e engenharia de contexto adotados pelas equipes; cobertura de testes acima de 90%, com o roadmap cerca de dois meses adiantado."
    },
    netra: {
      title: "Engenheiro de Software Sênior",
      org: "Netra Tecnologia",
      mode: "Remoto",
      periodLabel: "Set 2023 – Jun 2026",
      summary: "Melhorou o desempenho das APIs em 45% com cache e otimização de consultas e liderou a automação de CI/CD, aumentando os deploys em 80%.",
    },
    prodeb: {
      title: "Engenheiro de Software",
      org: "PRODEB",
      mode: "Híbrido",
      periodLabel: "Fev 2022 – Set 2023",
      summary: "Entregou funcionalidades e APIs REST com Laravel e Vue, integrando PostgreSQL e Redis e apoiando microsserviços baseados em Kubernetes.",
    },
    ramiro: {
      title: "Engenheiro de Software Júnior",
      org: "Grupo Ramiro Campelo",
      mode: "Presencial",
      periodLabel: "Nov 2021 – Fev 2022",
      summary: "Desenvolveu integrações de e-commerce e reduziu em 25% as falhas da API de pedidos com melhorias na integração do sistema de compras.",
    },
    trt5: {
      title: "Estagiário de Engenharia de Software",
      org: "TRT5",
      mode: "Remoto",
      periodLabel: "Ago 2020 – Nov 2021",
      summary: "Atuou na resposta a incidentes de segurança e em testes de intrusão, reduzindo vulnerabilidades em 30% e integrando OpenVAS ao Zabbix com Python.",
    },
  },
  business: {
    enterpriseTitle: "Projetos Corporativos",
    enterpriseHint: "Sistemas corporativos",
    infraTitle: "Projetos de Infraestrutura e API",
    infraHint: "Principais contribuições em modernização de sistemas, autenticação e orquestração de APIs",
    roleLabel: "Cargo:",
    techLabel: "Tecnologias:",
    referenceLabel: "Referência:",
    deployLabel: "Deploy",
    statusDev: "Em desenvolvimento",
    statusLegacy: "Fora de produção",
    internalTag: "Sistema interno",
    systems: {
      "1": {
        title: "SISPPPG",
        role: "Arquiteto de Sistemas / Engenheiro de Software Sênior / DevOps",
        description: "Sistema para gerenciamento de programas de pós-graduação e projetos de pesquisa, semelhante ao SISTEX, mas com foco em programas acadêmicos e acompanhamento de projetos.",
      },
      "2": {
        title: "SISTEX",
        role: "Arquiteto de Sistemas / Engenheiro de Software Sênior / DevOps",
        description: "Sistema de Extensão Universitária. Gerencia projetos, planos e relatórios de atividades.",
      },
      "3": {
        title: "SIPAE",
        role: "Arquiteto de Sistemas / Engenheiro de Software Sênior / DevOps",
        description: "Sistema Integrado de Auxílio Estudantil. Gerencia bolsas e benefícios estudantis.",
      },
      "4": {
        title: "SIDOC",
        role: "Engenheiro de Software Sênior / DevOps",
        description: "Sistema de gestão de documentos e fluxo de trabalho administrativo.",
      },
      "5": {
        title: "SIGRH",
        role: "Engenheiro de Software Sênior / DevOps",
        description: "Sistema de Gestão de Recursos Humanos para servidores acadêmicos e técnicos.",
      },
      "6": {
        title: "SIAC",
        role: "Engenheiro de Software Sênior / DevOps",
        description: "Sistema de Atividades Acadêmicas e Culturais. Gerencia cursos, oficinas e eventos abertos ao público oferecidos pela universidade.",
      },
      "7": {
        title: "SGP",
        role: "Engenheiro de Software Sênior / DevOps",
        description: "Sistema de Gestão de Projetos Institucionais.",
      },
      "8": {
        title: "SIIC v2",
        description: "Nova versão do sistema de informações e indicadores culturais da SECULT Bahia: design modular, Clean Architecture e qualidade automatizada.",
      },
    },
    infra: {
      "1": {
        title: "Plataforma de Login Institucional",
        role: "Arquiteto de Sistemas / Engenheiro de Software Sênior",
        description: "Implantei o serviço de autenticação unificado da universidade, possibilitando o login com credenciais institucionais e o controle de acesso centralizado em todos os sistemas.",
      },
      "2": {
        title: "Orquestração das APIs do SAC Bahia",
        role: "Engenheiro de Backend / Especialista em APIs",
        description: "Participei do desenvolvimento das APIs e da camada de orquestração que gerenciam agendamentos e serviços para a rede SAC Bahia (Prodeb).",
      },
      "3": {
        title: "Sistema de Pagamento dos Precatórios do FUNDEF",
        role: "Engenheiro de Backend / Especialista em Integração de Dados",
        description: "Desenvolvi e apoiei a gestão dos pagamentos de precatórios do FUNDEF para o Estado da Bahia, garantindo transparência e conformidade na alocação de recursos.",
      },
      "4": {
        title: "Modernização de Pipelines de CI/CD",
        role: "Engenheiro DevOps",
        description: "Criei e modernizei pipelines de CI no Jenkins e no GitLab para automatizar implantação, testes e verificações de qualidade de código em diversos projetos.",
      },
      "5": {
        title: "Implementação de Registro Interno de Contêineres",
        role: "Engenheiro DevOps / Administrador de Sistemas",
        description: "Projetei e implantei registros internos de contêineres usando Harbor para gerenciar e proteger imagens Docker na infraestrutura da organização.",
      },
    },
  },
  arch: {
    title: "Arquitetura SIIC v2",
    text: "Fluxo da aplicação e decisões de arquitetura.",
    diagramTitle: "Diagrama da arquitetura SIIC v2",
    flowLabel: "Etapas do fluxo de arquitetura",
    steps: {
      "1": "A requisição chega",
      "2": "O frontend envia a requisição",
      "3": "O domínio processa o caso de uso",
      "4": "Autenticação e dados respondem",
    },
    nodes: {
      user: "Navegador/Usuário",
      frontend: "Frontend Vue 3 + TS",
      api: "API Laravel",
      http: "HTTP",
      actions: "Actions (casos de uso)",
      domain: "Domínio",
      auth: "Keycloak/OAuth2",
      data: "PostgreSQL/Redis"
    },
    notes: {
      "1": "monólito modular",
      "2": "fronteira HTTP fina",
      "3": "correlação de requests + health",
      "4": "testes acima de 90%"
    }
  },
  contact: {
    title: "Informações de contato",
    location: "Salvador/BA - Brasil",
    whatsappMessage: "Olá, Yan! Vi seu portfólio e gostaria de conversar.",
    timezone: "UTC−3 · America/Bahia",
    modality: "Preferência: remoto · aceito presencial/híbrido · disponível para realocação se necessário",
    whatsappLabel: "WhatsApp",
  },
  hireTitle: "Vamos construir algo confiável.",
  hireText: "Construo e evoluo sistemas web, APIs, infraestrutura e soluções de IA aplicada. Conte o que você está desenvolvendo e o que precisa avançar.",
  hireServicesTitle: "Como posso ajudar",
  hireServices: {
    "1": {
      title: "Sistemas web",
      text: "Aplicações web modulares desenvolvidas e evoluídas com Laravel e Vue, com PostgreSQL e Redis quando o projeto precisar."
    },
    "2": {
      title: "APIs REST",
      text: "Desenvolvimento e implementação de APIs, incluindo integrações, autenticação, testes e observabilidade."
    },
    "3": {
      title: "DevOps",
      text: "Infraestrutura e entrega conteinerizadas com Docker, Kubernetes, CI/CD e GNU/Linux, da criação de clusters à automação de pipelines."
    },
    "4": {
      title: "IA aplicada",
      text: "Trabalho prático com IA, de detecção de anomalias em logs e desenvolvimento assistido por IA a ferramentas de contexto para agentes de programação."
    }
  },
  hireStepsTitle: "Como funciona",
  hireSteps: {
    "1": {
      title: "Conversa",
      text: "Conversamos sobre seu contexto, objetivos e restrições."
    },
    "2": {
      title: "Escopo",
      text: "Alinhamos requisitos, prioridades e o que será incluído."
    },
    "3": {
      title: "Proposta",
      text: "Apresento uma abordagem e proposta com base no escopo acordado."
    },
    "4": {
      title: "Entrega",
      text: "Executo o trabalho acordado e compartilho o andamento até a entrega."
    }
  },
  hireAvailabilityTitle: "Disponibilidade",
  hireFaqTitle: "Perguntas frequentes",
  hireFaq: {
    "1": {
      q: "Quais são os prazos típicos dos projetos?",
      a: "Respondo em até 24 horas. Após conversar com você, envio a estimativa em até 3 dias úteis. Os prazos variam com o escopo: algo simples pode ir ao ar em poucos dias, algo complexo leva mais tempo — depende do tamanho da entrega."
    },
    "2": {
      q: "Você aceita assinar um NDA ou contrato?",
      a: "Sim. Trabalho com contrato de prestação de serviços — freelas e PJ — e assino NDA sempre que o projeto exigir."
    },
    "3": {
      q: "Como você estrutura seus valores e a cobrança?",
      a: "Flexível e a combinar: hora, escopo fechado ou mensalidade — sempre com entregas bem rápidas."
    }
  },
  hireCtaTitle: "Tem um projeto em mente?",
  hireCtaText: "Conte um pouco sobre o contexto e vamos conversar sobre o próximo passo.",
  hireWhatsAppCta: "Conversar pelo WhatsApp",
  hireEmailCta: "Me envie um e-mail"
};
