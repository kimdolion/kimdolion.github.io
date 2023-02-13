import { EducationDetailsProps } from "./components/EducationSection";
import { ExperienceDetailsProps } from "./components/ExperienceSection";
import { ProjectProps, TechnologiesProps } from "./components/ProjectsSection";

export const CURRENT_PROJECTS: ProjectProps[] = [
  {
    id: 'project-personal-portfolio',
    title: 'Personal Portfolio',
    projectImage: {
      alt: "Screenshot of Kimberly Wilkes' portfolio site's frontpage with profile photo and description of herself.",
      src: 'https://kimdolion-portfolio.s3.amazonaws.com/Screen+Shot+2023-02-02+at+4.49.01+PM.png',
      height: 2052,
      width: 1438,
    },
    description: "My personal portfolio page! I wanted to show off some of the neat components I've learned about over the last few years.",
    technologies: 'NextJS, TypeScript, Sass, Jest and Testing-Library.',
    links: [
      {
        name: 'Frontend Github',
        href: 'https://github.com/kimdolion/kimdolion.github.io',
        iconName: 'Github',
      },
    ]
  },
  {
    id: 'project-pokemon-charity-battle',
    title: 'Pokemon Charity Battle',
    projectImage: {
      src: '',
      alt: 'Under construction sign.',
      height: 2052,
      width: 1438,
    },
    description: "A work in progress donation sprite battle site utilizing Stripe to allow users to buy pokemon. DO NOT USE REAL CREDIT CARD INFO. Please use Stripe's test cards.",
    technologies: 'NextJS, TypeScript, TailwindCSS, PokeAPI, and Stripe.',
    links: [
      {
        name: 'Pokemon Marketplace Client',
        href: 'https://pokemon-charity-battle.vercel.app/',
        iconName: 'ArrowOut'
      },
      {
        name: 'Frontend Github',
        href: 'https://github.com/kimdolion/pokemon-charity-battle',
        iconName: 'Github',
      }
    ]
  }
]

export const EDUCATION_DETAILS: EducationDetailsProps[] = [
  {
    headingProps: {
      id: 'education-bhcc',
      mainHeadingText: 'Bunker Hill Community College (BHCC)',
      endMonth: 'May',
      endYear: 2021,
      startMonth: 'June',
      startYear: 2019,
      url: 'https://www.bhcc.edu/'
    },
    certification: 'Coursework in Computer Science',
    extraDetails: 'Classes included Java, C++, SQL, and Data Structures. I earned high enough grades to join the honor society, Phi Theta Kappa, as well.',
    schoolColor: '#c8102e'
  },
  {
    headingProps: {
      id: 'education-ga',
      mainHeadingText: 'General Assembly (GA)',
      endMonth: 'October',
      endYear: 2019,
      startMonth: 'June',
      startYear: 2019,
      url: 'https://generalassemb.ly/'
    },
    certification: 'Certificate on Software Engineering Immersive',
    extraDetails: 'Completed fullstack projects building single page applications (SPAs) using a variety of languages and frameworks including: React, jQuery, Boostrap, MongoDB, Express, and Ruby on Rails. Always enjoyed helping my classmates test their apps and provide feedback based on my findings.',
    schoolColor: '#FA4542',
  },
  {
    headingProps: {
      endMonth: 'July',
      endYear: 2014,
      id: 'education-umass',
      mainHeadingText: 'University of Massachusetts Boston (UMB)',
      startMonth: 'August',
      startYear: 2013,
      url: 'https://www.umb.edu/',
    },
    certification: 'M.A. in Elementary Education',
    extraDetails: 'Worked in Boston Public Schools as an elementary and middle school teacher for grades 2nd to 7th with a primary focus on Science, Technology, Engineering, and Mathematics (STEM) courses. Earned licensure in Special Education and English as a Second Language.',
    schoolColor: '#005A8B',
  },
  {
    headingProps: {
      id: 'education-amherst',
      mainHeadingText: 'Amherst College',
      endMonth: 'May',
      endYear: 2013,
      startMonth: 'August',
      startYear: 2009,
      url: 'https://www.amherst.edu/'
    },
    certification: 'B.A. in Black Studies and Psychology',
    extraDetails: 'Clubs/Organizations: Amherst Mixed Martial Arts Organization (AMMO): Isshinryu and Brazilian Jiu Jitsu, Amherst Pride Alliance, Board Games Club, Japanese Animation Club (Anime Club): Co-president, RESULTS, Inc., Student Security, and THiNK.',
    schoolColor:  '#4d1979',
  },
]

export const GENERAL_ASSEMBLY_PROJECTS: ProjectProps[] = [
  {
    id: 'project-boba-tracker',
    title: 'Boba Tracker',
    projectImage: {
      src: 'https://kimdolion-portfolio.s3.amazonaws.com/bobatracker.png',
      alt: 'Screenshot of a website showing cups with flavors, toppings, and prices.',
      height: 2052,
      width: 1438,
    },
    description: 'Full-stack project bubble tea tracker to monitor your personal exploration of the wonderful world of bubble tea. You can keep track of the orders you\'ve made including details about the drink and upload photos of the drink.',
    technologies: 'React, React Bootstrap, HTML5, CSS3, MongoDB, Express.js, and a need to organize my favorite boba.',
    links: [
      {
        name: 'Boba Tracker: Client',
        href: 'https://sei-04-team-3.github.io/group-project-client/',
        iconName: 'ArrowOut',
      },
      {
        name: 'Frontend Github',
        href: 'https://github.com/sei-04-team-3/group-project-client',
        iconName: 'Github',
      },
      {
        name: 'Backend Github',
        href: 'https://github.com/sei-04-team-3/group-project-api',
        iconName: 'Github',
      }
    ]
  },
  {
    id: 'project-chatroom',
    title: 'Chatroom',
    description: 'Full-stack project using Socket.io that live updates a chatroom. Similar to a Discord channel. Just a lot simpler.',
    projectImage: {
      src: 'https://kimdolion-portfolio.s3.amazonaws.com/chatroomproject.jpg',
      alt: 'Screenshot of chatroom with a few messages that list user and time since a message was posted.',
      height: 1520,
      width: 2164,
    },
    technologies: 'JavaScript, Handlebars.js, HTML5, CSS3, Bootstrap, MongoDB, Express.js, and Socket.io.',
    links: [
      {
        name: 'Chatroom: Client',
        href: 'https://sei-04-team-3.github.io/group-project-client/',
        iconName: 'ArrowOut',
      },
      {
        name: 'Frontend Github',
        href: 'https://github.com/sei-04-team-3/group-project-client',
        iconName: 'Github',
      },
      {
        name: 'Backend Github',
        href: 'https://github.com/sei-04-team-3/group-project-api',
        iconName: 'Github',
      }
    ]
  },
  {
    id: 'project-yeet-into-the-void',
    title: 'Yeet into the Void',
    description: 'An ultra simple fullstack project where I wanted to experiment with animations. It was a place to collect your thoughts and "throw" them into space.',
    projectImage: {
      src: 'https://kimdolion-portfolio.s3.amazonaws.com/void-yeet.jpg',
      alt: 'Screenshot of a website that has a black starry background and instructions to sign up.',
      height: 1178,
      width: 984,
    },
    technologies: 'HTML5, CSS3, JavaScript, Handlebars.js, Ruby, Ruby on Rails, and a desire to throw my worries far away, preferably into space.',
    links: [
      {
        name: 'Yeet into the Void: Client',
        href: 'https://kimdolion.github.io/void-yeet-client/',
        iconName: 'ArrowOut',
      },
      {
        name: 'Frontend Github',
        href: 'https://github.com/kimdolion/void-yeet-client',
        iconName: 'Github',
      },
      {
        name: 'Backend Github',
        href: 'https://github.com/kimdolion/void-yeet-backend',
        iconName: 'Github',
      }
    ]
  },
  {
    id: 'project-tic-tac-toe',
    title: 'Tic Tac Toe',
    description: 'The first mostly frontend project I ever created. An in-browser game that lets users play and log color-coded games of tic-tac-toe.',
    projectImage: {
      src: 'https://kimdolion-portfolio.s3.amazonaws.com/kw-tic-tac-toe.jpg',
      alt: 'Screenshot of a game of tic tac toe with Player X having one the match.',
      height: 2052,
      width: 1438,
    },
    technologies: 'JavaScript, HTML5, CSS3, Bootstrap, and sheer determination to not let a child’s game stop me from becoming a web developer.',
    links: [
      {
        name: 'Tic-Tac-Toe: Client',
        href: 'https://kimdolion.github.io/tic-tac-toe-client/',
        iconName: 'ArrowOut',
      },
      {
        name: 'Frontend Github',
        href: 'https://github.com/kimdolion/tic-tac-toe-client',
        iconName: 'Github',
      },
    ]
  },
]

export const HEADING_GROUPINGS: string[] = [
  'H2', 'H2, H3', 'H2, H3, H4', 'H2, H3, H4, H5', 'H2, H3, H4, H5, H6'
]

export const RANDOM_FACTS: string[] = [
  "Proud of my heritage as a Black and Korean woman; representing both worlds with this flag by Onjena Yo of Carbon-Fibre media. I always enjoy some mean Seoul food.",
  "World traveler: I've visited 16 different countries before I turned 16 thanks to family and an ambassador program called People to People.",
  "My github username comes from my best friend mispelling a pokemon she was naming after me (Kimbo => Kimdo) and inspired by my mane of hair (Lion).",
  "I adore my pets, two cats named Evie and Khaleesi (Khali for short). Always happy to chat about them or your pets!",
  "I'm a dedicated QA tester and have won lunch for finding the most bugs in a video streaming app in a week.",
  "I'll talk for hours about anything fantasy, whether it's books or visual media. I'm a huge fan of Wheel of Time, Lord of the Rings, Harry Potter, and Game of Thrones.",
  "I love animals with cats and horses being at the top of my favorite list. However, bugs/spiders are at the bottom of that list.",
  "I taught 2nd grade up to 7th grade in English Language Arts, Science, Social Studies, and Math. 5th grade was honestly my favorite to teach.",
  "Renaissance Faires are my favorite excuse to get dressed up as fantasy characters and yell huzzah to cheer on performers while feasting on turkey legs.",
  "Definitely a gamer on PC, Nintendo, or Playstation. I mostly play World of Warcraft (For the Horde!).",
  'I am a huge nerd and regularly attend pop culture conventions such as Anime Boston, New York Comic Con, and Connecticon.',
  "Recently achieved a 200 day streak on Duolingo for Korean. It's a great alphabet to learn and I can read any of it, still working on understanding what I read.",
]

export const TECHNOLOGIES: TechnologiesProps =
  {
    frontend: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'React Native', 'NextJS', 'TailwindCSS', 'Bootstrap', 'Sass', 'Chakra-ui'], 
    backend: ['NodeJS', 'ExpressJS', 'MongoDB', 'PostgreSQL', 'GraphQL', 'Prisma', 'Ruby on Rails', 'Directus'], 
    other: ['Git', 'Github', 'Jest', 'React Testing Library', 'React Native Testing Library', 'Cypress', 'WebFlow', 'Vercel', 'Makeswift', 'Plasmic']
}


export const TEST_IDS = {
  headerTestIds: {
    themeButton: "themeButton"
  },
  // toc = Table of Contents
  tocTestIds: {
    dropdown: 'dropdownToC',
    list: 'listToc',
    tableOfContents: 'tableOfContents'
  }

}

export const WORK_EXPERIENCES: ExperienceDetailsProps[] = [
  {
    company: 'Echobind',
    headingProps: { 
      mainHeadingText: 'Software Engineer II', 
      id: "software-engineer", 
      startMonth: 'Sept', 
      startYear: 2020, 
      endMonth: 'Jan', 
      endYear: 2023
    },
    location: 'Boston (Remote)',
    responsibilities: [
      'Developed full stack web and mobile apps for a variety of industries following best practices using technologies and libraries including React, React Native, TypeScript, Nextjs, Prisma, Apollo, Tailwind CSS, and Graphql.',
      'Maintained and updated sites using website builders such as Webflow, Makeswift, and Plasmic.',
      'Collaborated with design and strategy teammates to ensure client needs were met with tools such as Figma, Illustrator, and Shortcut.',
      'Provided thorough QA and E2E testing using testing libraries such as Jest and Cypress.',
      'Wrote and provided peer reviews of technical and personal blog content for marketing.',
    ],
    extraDetails: 'Pair programming was always one of my favorite opportunities to learn and check understanding.'
  },
  {
    company: 'athenaHealth',
    headingProps: { 
      mainHeadingText: 'Software Development Intern', 
      id: 'software-intern', 
      startMonth: 'June', 
      startYear: 2020, 
      endMonth: 'Aug', 
      endYear: 2020
    },
    location: 'Boston (Remote)',
    responsibilities: [
      'Replaced IAM scripts for updated infrastructure moving towards managing Okta hosted microservices through the use of Terraform, Jenkins, Docker, and AWS, engaging in CI/CD pipelines for development, testing, and deployment.',
      'Developed documentation to show how our team understood and implemented Terraform for Okta resources.',
      'Conducted Okta API testing using Postman collections',
    ],
    extraDetails: '',
  },
  {
    company: 'Hack.Diversity',
    headingProps: { 
      mainHeadingText: '2020 Hack.Diversity Fellow', 
      id: 'hack-diversity-fellow', 
      startMonth: 'Nov', 
      startYear: 2019, 
      endMonth: 'Aug', 
      endYear: 2020
    },
    location: 'Boston (Remote)',
    responsibilities: [
        'Selected as 1 of 75 candidates selected into 2020 Hack.Diversity Fellowship, a career leadership and workforce development program that integrates Boston’s innovation, corporate civic, academic, and philanthropic pillars to provide mentoring and support of under-represented populations in the technology industry.',
        'Managed as Operations Team Lead for coordinating, developing, and building an application for the 2020 de.Hackathon.'
    ],
    extraDetails: '',
  },
  {
    company: 'Boston Public Schools',
    headingProps: { 
      mainHeadingText: 'Elementary Educator', 
      id: 'elementary-educator', 
      startMonth: 'Aug', 
      startYear: 2013, 
      endMonth: 'June', 
      endYear: 2019
    },
    location: 'Boston (Remote)',
    responsibilities: [
        'Collaborated within and across grade level teams (2nd to 7th) to provide differentiated learning experiences using a variety of curriculum and technology resources with a focus on Science, Technology, Engineering, Mathematics (STEM).',
        'Communicated regularly with staff and families through phone, email, educational apps, and newsletters to provide additional resources to support student learning.',
        'Collaborated with school administrators, parents, and teachers in designing and implementing individualized education plans (IEPs) and differentiated learning experiences using a variety of resources including technology utilizing Google suite, Khan Academy, and Mobymax.com.',
        'Researched and provided support for a variety of technology resources, such as Mobymax and Keyboarding without Tears, to support differentiated learning across subjects.',
        'Analyzed data from formal and informal sources such as Illuminate, MCAS, and classroom observations.',
    ],
    extraDetails: 'I also was a substitute teacher at various schools throughout the Boston Public School district.',
  }
]
