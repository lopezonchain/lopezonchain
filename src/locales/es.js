const es = {
  header: {
    description: "Desarrollador de software y blockchain. Web3 full-stack, integraciones MCP y sistemas agénticos.",
    stats: [
      { value: "7+", label: "Años de experiencia" },
      { value: "AI", label: "& Software" },
      { value: "⛓", label: "Blockchain" },
      { value: "</>", label: "Full-Stack" },
      { value: "🏗", label: "Soluciones" }
    ]
  },
  nav: {
    about: "Sobre mí",
    projects: "Proyectos",
    work: "Experiencia laboral",
    awards: "Premios"
  },
  about: {
    description: "Soy López, desarrollador full-stack con varios años de experiencia en software tradicional, blockchain y seguridad. Los últimos años he estado metido de lleno en Web3, construyendo desde contratos inteligentes hasta plataformas completas con integración de agentes IA.",
    experience_title: "Experiencia",
    experience: "He trabajado en proyectos que mezclan web tradicional con blockchain e IA. Últimamente me he centrado en Web3: mini-apps para Farcaster, APIs para agentes, servidores MCP y rutinas onchain automatizadas. También tengo bastante experiencia en software empresarial y ciberseguridad.",
    tech_title: "Tech Stack",
    tech: "Lenguajes\nSolidity, Rust, TypeScript, JavaScript, Java, C#\n\nFrameworks\nReact, Next.js, Node.js, Express, Spring, Unity\n\nBlockchain & AI\nEVM, Base, Solana, Farcaster, Privy, Base Smart Wallets, IA, Agentes\n\nBases de datos\nPostgreSQL, MongoDB, MySQL, Oracle",
    passion_title: "Pasión",
    passion: "Me encanta crear experiencias visuales donde el diseño y la tecnología encajan bien. Si además hay blockchain o agentes IA de por medio, mejor.",
    goal_title: "Objetivo",
    goal: "Seguir construyendo soluciones que combinen IA y blockchain de forma útil y escalable, y ayudar a otros a hacer lo mismo."
  },
  skills: {
    title: "Habilidades",
    categories: [
      {
        name: "Blockchain",
        icon: "⛓️",
        items: ["Solidity", "Rust", "EVM", "Solana", "Smart Contracts", "DeFi"]
      },
      {
        name: "IA & Agentes",
        icon: "🤖",
        items: ["Protocolo MCP", "Agent APIs", "Claude AI", "Flujos de trabajo agénticos", "8004", "x402"]
      },
      {
        name: "Frontend",
        icon: "🎨",
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Farcaster & Base Miniapps"]
      },
      {
        name: "Backend",
        icon: "⚙️",
        items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs", "WebSockets"]
      }
    ]
  },
  projects: {
    title: "Proyectos",
    visitButtonText: "Visitar web",
    list: [
      {
        id: 1,
        title: "Indexy",
        description: "Desarrollador jefe. Plataforma de índices cripto con datos en tiempo real, Agent API, servidor MCP para Claude AI, mini-app de Farcaster en Base, sistema de concursos automatizado y autenticación con Base smart wallets via Privy.",
        visitUrl: "https://indexy.xyz",
        image: "/assets/workhistory/indexy.png"
      },
      {
        id: 2,
        title: "WarpPay",
        description: "Mini-app de pagos todo en uno. Envía, crea links de solicitud, multi-envíos y pagos programados. Integrada en los feeds de Farcaster y Coinbase, soportando también escritorio.",
        visitUrl: "https://warppay.lopezonchain.xyz",
        image: "/assets/warpPay.png"
      },
      {
        id: 3,
        title: "PingGate",
        description: "Marketplace Web3 basado en chat. Integración en los feeds de Farcaster y Coinbase, soportando también escritorio.",
        visitUrl: "https://pinggate.lopezonchain.xyz",
        image: "/assets/pingGate.png"
      },
      {
        id: 4,
        title: "¿Qué será lo siguiente?",
        description: "¿Tienes alguna idea que quieras convertir en realidad? Hablemos.",
        visitUrl: "https://t.me/lopezdev",
        image: "/assets/profile.png"
      }
    ]
  },
  workHistory: {
    title: "Experiencia laboral",
    list: [
      {
        id: 1,
        featured: true,
        role: "Desarrollador Jefe",
        company: "Indexy",
        period: "Julio 2025 – Presente",
        location: "Remoto",
        url: "https://indexy.xyz",
        image: "/assets/workhistory/indexy.png",
        description: "Me uní como desarrollador freelance a Indexy, una plataforma de seguimiento de índices cripto. Trabajo en el desarrollo full-stack de la plataforma, desde la arquitectura de APIs hasta el frontend.",
        highlights: [
          "Agent API con gestión de API keys y registro 8004 para acceso programático por agentes IA",
          "Pagos por API key con x402",
          "Servidor MCP que permite a Claude AI y otros LLMs interactuar con Indexy",
          "Miniapp de Farcaster y Base app con integración en el ecosistema y notificaciones sociales",
          "Base smart wallets via Privy con soporte de email, Farcaster y wallet",
          "Rutinas automáticas de actualización de datos",
          "Sistema de concursos con puntuación BPS, leaderboards y reparto de premios",
          "Microservicio de imágenes OG para previsualizaciones sociales de alto rendimiento y autogeneradas",
          "Analíticas multi-timeframe, seguimiento de sesiones y caché de KPIs para el dashboard",
          "Gestión de agentes IA y tareas automatizadas",
          "Contratos inteligentes, implementación de trading con terceros"
        ],
        tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "MCP", "Farcaster", "Base", "Privy", "Smart Wallets", "Agent API"]
      },
      {
        id: 2,
        role: "Desarrollador Web3 independiente",
        company: "Freelance",
        period: "Febrero 2024 – Presente",
        location: "Remoto",
        image: "/assets/workhistory/now.jpg",
        description: "Construyendo en el ecosistema Web3 de forma independiente. Mini-apps para Farcaster, herramientas de pago, marketplaces y juegos onchain en Base.",
        highlights: [
          "WarpPay: mini-app de pagos todo en uno para Farcaster en Base",
          "PingGate: marketplace Web3 basado en chat en Farcaster y Coinbase feeds",
          "Buddy Battles: app GameFi, mejor GameFi en el Electroneum Hackathon 2025",
          "Varios contratos inteligentes desplegados en Base"
        ],
        tags: ["Solidity", "Farcaster", "React", "Base", "Web3", "EVM", "GameFi"]
      },
      {
        id: 3,
        role: "Desarrollador Full-Stack Senior",
        company: "Ohtic",
        period: "Abril 2022 – Enero 2024",
        location: "Barcelona, España",
        image: "/assets/workhistory/ohtic.png",
        description: "Desarrollo y mantenimiento de sistemas para clientes externos: webs, apps y sistemas de gestión de puertos, entre otros.",
        highlights: [
          "Sistemas de gestión de puertos y otras plataformas para clientes",
          "Desarrollo full-stack con React, Vue y Spring/Java",
          "Servicios con MongoDB e integraciones REST"
        ],
        tags: ["React", "Vue", "Java", "Spring", "MongoDB"]
      },
      {
        id: 4,
        role: "Desarrollador Full-Stack",
        company: "Softtek",
        period: "Septiembre 2019 – Marzo 2022",
        location: "Ávila, España",
        image: "/assets/workhistory/softtek.png",
        description: "Desarrollo y mantenimiento de sistemas para clientes externos: webs, apps móvil, APIs, sistemas de gestión de almacenes, sistemas automatizados y búsqueda rápida de datos.",
        highlights: [
          "Sistemas de gestión de almacenes y procesos automatizados",
          "Sistemas de búsqueda rápida de datos con Neo4j",
          "Arquitectura de microservicios con Java/Spring y frontend en Angular"
        ],
        tags: ["Java", "Spring", "Angular", "JavaScript", "Neo4j", "Microservices"]
      },
      {
        id: 5,
        role: "Desarrollador Web",
        company: "Adcore",
        period: "Junio 2019 – Septiembre 2019",
        location: "Ávila, España",
        image: "/assets/workhistory/adcore.png",
        description: "Desarrollo y mantenimiento de un sistema de gestión de agencias de viajes e integración de pasarela de pagos.",
        highlights: [
          "Sistema de gestión de agencias de viajes",
          "Integración de pasarela de pagos",
          "PHP, HTML, JS, XML y bases de datos relacionales"
        ],
        tags: ["PHP", "JavaScript", "HTML/CSS", "XML", "SQL"]
      },
      {
        id: 6,
        role: "Prácticas",
        company: "everis (NTT Data)",
        period: "Febrero 2019 – Mayo 2019",
        location: "Salamanca, España",
        image: "/assets/workhistory/everis.png",
        description: "Primera experiencia profesional en consultoría.",
        highlights: [
          "Gestión de un CMS"
        ],
        tags: ["CMS", "SQL"]
      }
    ]
  },
  awards: {
    title: "Premios",
    list: [
      {
        id: 1,
        title: "Mejor App GameFi",
        description: "Electroneum Hackathon – Marzo 2025",
        link: "https://devpost.com/software/base-buddy-buddy-battles",
        image: "/assets/electroneum2025.png"
      }
    ]
  }
};

export default es;
