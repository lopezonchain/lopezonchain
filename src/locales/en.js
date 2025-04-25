const en = {
  header: {
    description: "Software developer. Creating impactful and modern solutions."
  },
  nav: {
    about: "About Me",
    projects: "Projects",
    work: "Work History",
    awards: "Awards"
  },
  about: {
    title: "About Me",
    description: "I'm Lopez, a full-stack developer with experience in traditional and blockchain software and security.",
    experience_title:"Experiencie:",
    experience: "I've worked on challenging projects that merge conventional web technologies with emerging blockchain and cybersecurity solutions. Last year all-in onchain, I've been learning and developing a lot over blockchain networks, including custom smart contracts/programs, web tools and Unity integrations",
    tech_title:"Tech Stack:",
    tech: "I’ve primarily worked with these, though I’m constantly picking up new skills and have tried out a wide range of languages and technologies\nLanguages & frameworks\n Solidity, Rust, Javascript (Node, React, Next, Express), Java (Spring, Android), C#/C++ (Unity, Android)\n Databases\n NoSQL (Mongo, GraphSQL), SQL (PostgreSQL, MySQL, Oracle)\n Systems\n Linux, Android, Windows",
    passion_title:"Passion:",
    passion: "I love building engaging user experiences that are visually striking and functionally robust, where design and technology come together to make a difference.",
    goal_title:"Goal:",
    goal: "To drive digital transformation through scalable, secure, and disruptive solutions."
  },
  projects: {
    title: "Projects",
    visitButtonText: "Go to website",
    list: [
      {
        id: 1,
        title: "WarpPay",
        description: "Send / Require tokens over different EVM networks 100% free (working in more utility). Warpcast and Coinbase Miniapp, also accesible from Desktop.",
        visitUrl: "https://warppay.lopezonchain.xyz",
        image: "/assets/warpPay.png"
      },
      {
        id: 2,
        title: "ETN Buddy",
        description: "A platform of battles that works with any token, a staking system and much more, in Electroneum",
        visitUrl: "https://etn.buddybattles.xyz",
        image: "/assets/buddy.png"
      },
      {
        id: 3,
        title: "Bulk Airdrop Tool",
        description: "Tool for doing ERC-20 token airdrops to multiple wallets in batches of 500 sends per tx, working on Base and Electroneum",
        visitUrl: "https://airdrop.buddybattles.xyz",
        image: "/assets/bulkAirdrop.png"
      },
      {
        id: 4,
        title: "WarpBoard",
        description: "Message board with some contribution and reward mechanics. Warpcast Miniapp, also accesible from Desktop with Metamask. ",
        visitUrl: "https://warpboard.lopezonchain.xyz",
        image: "/assets/warpBoard.png"
      },
      {
        id: 5,
        title: "Trading bot",
        description: "Work In Progress - A microservices backend and tg bot for allowing anyone trading seamlessly",
        visitUrl: "",
        image: "/assets/wip.png"
      },
      {
        id: 6,
        title: "What will be next?",
        description: "Do you have any project idea and want to bring it to life? lets talk about it!",
        visitUrl: "https://t.me/lopezdev",
        image: "/assets/profile.png"
      }
    ]
  },
  workHistory: {
    title: "Work History",
    list: [
      { 
        id: 1, 
        role: "Blockchain developer", 
        company: "No company", 
        period: "February 2024 - today", 
        location: "The Earth",
        image: "/assets/workhistory/now.jpg"
      },
      { 
        id: 2, 
        role: "Senior full-stack developer", 
        company: "Ohtic", 
        period: "April 2022 - January 2024", 
        location: "Barcelona, Spain",
        image: "/assets/workhistory/ohtic.png"
      },
      { 
        id: 3, 
        role: "Full-stack developer", 
        company: "Softtek", 
        period: "September 2019 - March 2022", 
        location: "Ávila, Spain",
        image: "/assets/workhistory/softtek.png"
      },
      { 
        id: 4, 
        role: "Web Developer", 
        company: "Adcore", 
        period: "June 2019 - September 2019", 
        location: "Ávila, Spain",
        image: "/assets/workhistory/adcore.png"
      },
      { 
        id: 5, 
        role: "Intern and Trainee", 
        company: "everis", 
        period: "February 2019 - May 2019", 
        location: "Salamanca, Spain",
        image: "/assets/workhistory/everis.png"
      }
    ]
  },
  awards: {
    title: "Awards",
    list: [
      {
        id: 1,
        title: "Best GameFi App",
        description: "Electroneum hackathon - March 2025",
        link: "https://devpost.com/software/base-buddy-buddy-battles",
        image: "/assets/electroneum2025.png"
      }
    ]
  }
};

export default en;
