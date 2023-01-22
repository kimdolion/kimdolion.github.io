import { ExperienceDetailsProps } from "./components/ExperienceSection";

export const workExperiences: ExperienceDetailsProps[] = [
  {
    company: 'Echobind',
    headingProps: { mainHeadingText: 'Software Engineer II', startMonth: 'Sept', startYear: 2020, endMonth: 'Jan', endYear: 2023}, 
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
    headingProps: { mainHeadingText: 'Software Development Intern', startMonth: 'June', startYear: 2020, endMonth: 'Aug', endYear: 2020}, 
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
    headingProps: { mainHeadingText: '2020 Hack.Diversity Fellow', startMonth: 'Nov', startYear: 2019, endMonth: 'Aug', endYear: 2020}, 
    location: 'Boston (Remote)', 
    responsibilities: [
        'Selected as 1 of 75 candidates selected into 2020 Hack.Diversity Fellowship, a career leadership and workforce development program that integrates Boston’s innovation, corporate civic, academic, and philanthropic pillars to provide mentoring and support of under-represented populations in the technology industry.',
        'Managed as Operations Team Lead for coordinating, developing, and building an application for the 2020 de.Hackathon.'
    ],
    extraDetails: '',
  },
  {
    company: 'Boston Public Schools',
    headingProps: { mainHeadingText: 'Elementary Educator', startMonth: 'Aug', startYear: 2013, endMonth: 'June', endYear: 2019}, 
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

export const randomFacts = [
    "I've traveled to 16 different countries before I turned 16.", 
    "I have two cats, Evie and Khaleesi (Khali for short).",
    "I live with 3 dogs.",
    "I've been to 4 different states' renaissance faires.",
    "I play World of Warcraft (For the Horde!)",
    'I have been to Anime Boston, New York Comic Con, and Connecticon.',
    'I was attending Connecticon when Pokemon Go came out and had a blast running around in costume while trying to catch Pokemon.'
]