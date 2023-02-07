import Link from 'next/link';
import { useRouter } from 'next/router';
import { Divider } from './Divider';
import { Section } from './Section';

import { CURRENT_PROJECTS, GENERAL_ASSEMBLY_PROJECTS, TECHNOLOGIES } from '@/constants';
import { StyledLink } from './StyledLink';
import styles from '@/styles/Home.module.css'
import { ImageOverlay, ImageProps } from './ImageOverlay';
import GithubIcon from './icons/GithubIcon';
import { useTheme } from '@/utils';
import ArrowOutIcon from './icons/ArrowOutIcon';
import UnderConstructionImage from '/public/mark-konig-Uu5fnOkFAdA-unsplash.jpg'
import { useEffect } from 'react';

export interface ProjectsProps {
    extraInfo?: boolean
}

export interface TechnologiesProps {
  frontend: string[]
  backend: string[]
  other: string[]
}
/**
 * did not order this alphabetically for my own sense of how the project cards are organized.
 */
export interface ProjectProps {
  id: string;
  title: string;
  description: string;
  projectImage: ImageProps;
  technologies: string;
  links: { name: string, href: string, iconName?: string }[]
}

export interface ProjectCardProps {
  project: ProjectProps
}

const ProjectCard = ({ project} : ProjectCardProps) => {
  const { isDarkMode } = useTheme()
  const { description, id, projectImage, links, technologies, title } = project;
  const { src, } = projectImage;
  const imageAvailable = src !== ''
  const defaultImage = {
    src: UnderConstructionImage,
    alt: 'Under construction.'
  }

  return (
    <div className={styles.projectCard}>
      <div className={styles.projectCardImage}>
        <ImageOverlay image={imageAvailable ? projectImage : defaultImage} displayRow>
          <h3 id={id}>{title}</h3>
          <p>Made with: {technologies}</p>
        </ImageOverlay>
      </div>
      <div>
        <p style={{fontWeight: 'bold'}}>{title}</p>
        <p>{description}</p>
        <p style={{ fontSize: 16, fontWeight: 'bold'}}>Links to Deployed Site and Github Repos</p>
        <div className={styles.links}>
          {links.map((link, index)=> {
            if (link.iconName === 'Github') {
              return <StyledLink key={link.name + index} href={link.href} name={link.name}><GithubIcon width="1.5em" fill={isDarkMode ? "white" : ""} /></StyledLink>
            } else {
              return <StyledLink key={link.name + index} href={link.href} name={link.name}><ArrowOutIcon width="1.25em" fill={isDarkMode ? "white" : ""} /></StyledLink>
            }
            }
          )}
        </div>
      </div>
    </div>
  )
}

const GAProjects = (extraInfo: ProjectsProps) => (
  <div>
    {extraInfo ? <h2 id="projects-bootcamp">During General Assembly</h2> : <h3 id="projects-bootcamp">During General Assembly</h3>}
    <p>These projects were created at the beginning of my Software Engineering journey. They are in various states of disrepair but I intend to return to them and remake them with newer technology/understandings.</p>
    {GENERAL_ASSEMBLY_PROJECTS.map((project)=> <div key={project.id}><ProjectCard project={project} /><Divider /></div>)}
  </div>
)

interface TechCardProps {
  technologies: string
}
// feed it a list of tech in one of 3 categories: frontend, backend, other/
const TechCard = ({technologies}: TechCardProps) => {
  return (
    <div className={styles.techList}>
      {technologies}
    </div>
  )
}

export const ProjectsSection = ({ extraInfo = false }: ProjectsProps): JSX.Element => {

  return (
  <Section>
    <Link href="/projects" className={styles.styledLink} title="Check out more projects">{extraInfo ? <h1 id="projects-section">Projects and Tech</h1> : <h2 id="projects-section">Projects and Tech</h2>}</Link>

    {extraInfo ? <h2 id="technologies">Techstack</h2> : <h3 id="technologies">Techstack</h3>}
    <div>
      <p>Languages, tools, and frameworks I've worked with: </p>
    </div>
    <div className={styles.techListContainer}>
      <div>
        <p style={{fontWeight: 'bold'}}>Frontend</p>
        {TECHNOLOGIES.frontend.map((technology, index)=> <TechCard key={technology + index} technologies={technology} />
        )}
      </div>
      <div>
        <p style={{fontWeight: 'bold'}}>Backend</p>
        {TECHNOLOGIES.backend.map((technology, index)=> <TechCard key={technology + index} technologies={technology} />
        )}
      </div>
      <div>
        <p style={{fontWeight: 'bold'}}>Other Tools</p>
        {TECHNOLOGIES.other.map((technology, index)=> <TechCard key={technology + index} technologies={technology} />
        )}
      </div>
    </div>
    <Divider />
    <div>
      {extraInfo ? <h2 id="current-projects">Currently Working on:</h2> : <h3 id="current-projects">Currently Working on:</h3>}
      {CURRENT_PROJECTS.map((project)=> <div key={project.id}><ProjectCard project={project} />{extraInfo && <Divider />}</div>)}
    </div>
    {extraInfo && <Divider />}
    {extraInfo && <GAProjects extraInfo={extraInfo} />}
  </Section>
)}
