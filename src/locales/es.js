const es = {
  header: {
    description: "Desarrollador de software. Creando soluciones impactantes y modernas."
  },
  nav: {
    about: "Sobre mí",
    projects: "Proyectos",
    work: "Experiencia laboral",
    awards: "Premios"
  },
  about: {
    title: "Sobre mí",
    description: "Soy López, un desarrollador full-stack con experiencia en software tradicional, blockchain y seguridad.",
    experience: "He trabajado en proyectos desafiantes que fusionan tecnologías web convencionales con soluciones emergentes de blockchain y ciberseguridad. El último año he estado construyendo y aprendiendo en redes blockchain, incluyendo programs o contratos inteligentes personalizados, herramientas web e integraciones Unity",
    passion: "Me encanta crear experiencias de usuario envolventes que son visualmente impactantes y funcionalmente robustas, donde diseño y tecnología se unen para marcar la diferencia.",
    goal: "Impulsar la transformación digital a través de soluciones escalables, seguras y disruptivas."
  },
  projects: {
    title: "Proyectos",
    visitButtonText: "Visitar web",
    list: [
      {
        id: 1,
        title: "ETN Buddy",
        description: "Una plataforma de batallas que funciona con cualquier token, un sistemas de staking, una herramienta de airdrops y mucho más, en Electroneum",
        visitUrl: "https://etn.buddybattles.xyz",
        image: "/assets/buddy.png"
      },
      {
        id: 2,
        title: "Bulk Airdrop Tool",
        description: "Herramienta para hacer envios masivos de tokens de forma sencilla y rápida en grupos de 500 envíos por transacción, funcionando en Base y Electroneum",
        visitUrl: "https://airdrop.buddybattles.xyz",
        image: "/assets/bulkAirdrop.png"
      },
      {
        id: 3,
        title: "Trading bot",
        description: "En progreso - Un backend de microservicios y bot de telegram para permitir a cualquier intercambiar tokens de forma sencilla",
        visitUrl: "",
        image: "/assets/wip.png"
      },
      {
        id: 4,
        title: "What will be next?",
        description: "¿Tienes alguna idea que quieras convertir en una realidad? ¡Hablemos!",
        visitUrl: "https://t.me/lopezonchain",
        image: "/assets/profile.png"
      }
    ]
  },
  workHistory: {
    title: "Experiencia laboral",
    list: [
      { 
        id: 1, 
        role: "Desarrollador blockchain", 
        company: "Sin compañía", 
        period: "Febrero 2024 - hoy", 
        location: "La Tierra",
        image: "/assets/workhistory/now.jpg"
      },
      { 
        id: 2, 
        role: "Desarrollador full-stack senior", 
        company: "Ohtic", 
        period: "Abril 2022 - Enero 2024", 
        location: "Barcelona, España",
        image: "/assets/workhistory/ohtic.png"
      },
      { 
        id: 3, 
        role: "Desarrollador full-stack", 
        company: "Softtek", 
        period: "Septiembre 2019 - Marzo 2022", 
        location: "Ávila, España",
        image: "/assets/workhistory/softtek.png"
      },
      { 
        id: 4, 
        role: "Desarrollador web", 
        company: "Adcore Desarrollo y Comunicación SL", 
        period: "Junio 2019 - Septiembre 2019", 
        location: "Ávila, España",
        image: "/assets/workhistory/adcore.png"
      },
      { 
        id: 5, 
        role: "Practicante y aprendiz", 
        company: "everis", 
        period: "Febrero 2019 - Mayo 2019", 
        location: "Salamanca, España",
        image: "/assets/workhistory/everis.png"
      }
    ]
  },
  
  awards: {
    title: "Premios",
    list: [
      {
        id: 1,
        title: "Mejor App GameFi",
        description: "Hackathon Electroneum - Marzo 2025",
        link: "https://devpost.com/software/base-buddy-buddy-battles",
        image: "/assets/electroneum2025.png"
      }
    ]
  }
};

export default es;
