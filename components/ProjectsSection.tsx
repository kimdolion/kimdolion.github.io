import Link from 'next/link';
import { useRouter } from 'next/router';
import { Divider } from './Divider';
import { Section } from './Section';

import { currentProjects, generalAssemblyProjects } from '../constants';
import { StyledLink } from './StyledLink';
import styles from '@/styles/Home.module.css'
import { ImageOverlay, ImageProps } from './ImageOverlay';
import GithubIcon from './icons/GithubIcon';
import { useContext } from 'react';
import { ThemeContext } from '@/utils';
import ArrowOutIcon from './icons/ArrowOutIcon';
import UnderConstructionImage from '/public/mark-konig-Uu5fnOkFAdA-unsplash.jpg'

export interface ProjectsProps {
    extraInfo?: boolean
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
  const { isDarkMode } = useContext(ThemeContext)
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
        <p  style={{fontWeight: 'bold'}}>{title}</p>
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

const GeneralAssemblyProjects = () => (
  <div>
    <h3 id="projects-bootcamp">During General Assembly</h3>
    <p>These projects were created at the beginning of my Software Engineering journey. They are in various states of disrepair but I intend to return to them and remake them with newer technology/understandings.</p>
    {generalAssemblyProjects.map((project)=> <div key={project.id}><ProjectCard project={project} /><Divider /></div>)}
  </div>
)

export const ProjectsSection = ({extraInfo=false}: ProjectsProps): JSX.Element => {
  const router = useRouter()
  const currentPath = router.pathname

  return (
  <Section>
    {currentPath === '/projects' ? <h2 id="projects-section">Projects and Tech</h2> : <Link href="/projects"><h2 id="projects-section" title="Check out more projects" className={styles.styledLink}>Projects and Tech</h2></Link>}
      <div>
        <p>Currently Working on:</p>
        {currentProjects.map((project)=> <div key={project.id}><ProjectCard project={project} /><Divider /></div>)}
      </div>
      <div style={{margin: '1.5rem 0'}}>
        <p style={{fontWeight: 'bolder'}}>
          Technologies I've worked with:
        </p>
        <div>
          {/* TODO: grid of icons of languages/frameworks */}
        </div>
      </div>
      {extraInfo && <Divider />}
      {extraInfo && <GeneralAssemblyProjects />}
  </Section>
)}
