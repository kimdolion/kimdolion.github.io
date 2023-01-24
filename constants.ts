import { ExperienceDetailsProps } from "./components/ExperienceSection";
import { ProjectProps } from "./components/ProjectsSection";

export const currentProjects: ProjectProps[] = [
  {
    id: 'project-pokemon-marketplace',
    title: 'Pokemon Marketplace',
    description: '',
    technologies: 'NextJS, TypeScript, TailwindCSS, and Stripe',
    links: [
      {
        name: 'Pokemon Marketplace Client',
        href: 'https://pokemon-marketplace-chi.vercel.app/'
      },
      {
        name: 'Frontend Github',
        href: 'https://github.com/kimdolion/pokemon-marketplace',
      }
    ]
  }
]

export const generalAssemblyProjects: ProjectProps[] = [
  {
    id: 'project-boba-tracker',
    title: 'Boba Tracker',
    description: 'Full-stack project bubble tea tracker to monitor your personal exploration of the wonderful world of bubble tea. You can keep track of the orders you\'ve made including details about the drink and upload photos of the drink.',
    technologies: 'React, React Bootstrap, HTML5, CSS3, MongoDB, Express.js, and a need to organize my favorite boba.',
    links: [
      {
        name: 'Boba Tracker: Client',
        href: 'https://sei-04-team-3.github.io/group-project-client/'
      },
      {
        name: 'Frontend Github',
        href: 'https://github.com/sei-04-team-3/group-project-client'
      },
      {
        name: 'Backend Github',
        href: 'https://github.com/sei-04-team-3/group-project-api'
      }
    ]
  },
  {
    id: 'project-chatroom',
    title: 'Chatroom',
    description: 'Full-stack project using Socket.io that live updates a chatroom.',
    technologies: 'JavaScript, Handlebars.js, HTML5, CSS3, Bootstrap, MongoDB, Express.js, and Socket.io.',
    links: [
      {
        name: 'Chatroom: Client',
        href: 'https://sei-04-team-3.github.io/group-project-client/'
      },
      {
        name: 'Frontend Github',
        href: 'https://github.com/sei-04-team-3/group-project-client'
      },
      {
        name: 'Backend Github',
        href: 'https://github.com/sei-04-team-3/group-project-api'
      }
    ]
  },
  {
    id: 'project-yeet-into-the-void',
    title: 'Yeet into the Void',
    description: 'A place to collect your thoughts and "throw" them into space.',
    technologies: 'HTML5, CSS3, JavaScript, Handlebars.js, Ruby, Ruby on Rails, and a desire to throw my worries far away, preferably into space.',
    links: [
      {
        name: 'Yeet into the Void: Client',
        href: 'https://kimdolion.github.io/void-yeet-client/'
      },
      {
        name: 'Frontend Github',
        href: 'https://github.com/kimdolion/void-yeet-client'
      },
      {
        name: 'Backend Github',
        href: 'https://github.com/kimdolion/void-yeet-backend'
      }
    ]
  },
  {
    id: 'project-tic-tac-toe',
    title: 'Tic Tac Toe',
    description: 'The first mostly frontend project I ever created. An in-browser game that lets users play and log color-coded games of tic-tac-toe.',
    technologies: 'JavaScript, HTML5, CSS3, Bootstrap, and sheer determination to not let a child’s game stop me from becoming a web developer.',
    links: [
      {
        name: 'Tic-Tac-Toe: Client',
        href: 'https://kimdolion.github.io/tic-tac-toe-client/'
      },
      {
        name: 'Frontend Github',
        href: 'https://github.com/kimdolion/tic-tac-toe-client'
      },
    ]
  },
]

export const headingGroupings = [
  'h2', 'h2, h3', 'h2, h3, h4', 'h2, h3, h4, h5', 'h2, h3, h4, h5, h6'
]

export const randomFacts = [
    "I've traveled to 16 different countries before I turned 16.", 
    "I have two cats, Evie and Khaleesi (Khali for short).",
    "I live with 3 dogs.",
    "I've been to 4 different states' renaissance faires.",
    "I play World of Warcraft (For the Horde!)",
    'I have been to Anime Boston, New York Comic Con, and Connecticon.',
    'I was attending Connecticon when Pokemon Go came out and had a blast running around in costume while trying to catch Pokemon.'
]

export const workExperiences: ExperienceDetailsProps[] = [
  {
    company: 'Echobind',
    headingProps: { mainHeadingText: 'Software Engineer II', id: "software-engineer", startMonth: 'Sept', startYear: 2020, endMonth: 'Jan', endYear: 2023}, 
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
    headingProps: { mainHeadingText: 'Software Development Intern', id: 'software-intern', startMonth: 'June', startYear: 2020, endMonth: 'Aug', endYear: 2020}, 
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
    headingProps: { mainHeadingText: '2020 Hack.Diversity Fellow', id: 'hack-diversity-fellow', startMonth: 'Nov', startYear: 2019, endMonth: 'Aug', endYear: 2020}, 
    location: 'Boston (Remote)', 
    responsibilities: [
        'Selected as 1 of 75 candidates selected into 2020 Hack.Diversity Fellowship, a career leadership and workforce development program that integrates Boston’s innovation, corporate civic, academic, and philanthropic pillars to provide mentoring and support of under-represented populations in the technology industry.',
        'Managed as Operations Team Lead for coordinating, developing, and building an application for the 2020 de.Hackathon.'
    ],
    extraDetails: '',
  },
  {
    company: 'Boston Public Schools',
    headingProps: { mainHeadingText: 'Elementary Educator', id: 'elementary-educator', startMonth: 'Aug', startYear: 2013, endMonth: 'June', endYear: 2019}, 
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
