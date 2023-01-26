import Link from 'next/link';
import React from 'react'
import { currentProjects, generalAssemblyProjects } from '../constants';
import { StyledLink, styledLinkProp } from './StyledLink';

export interface ProjectsProps {
    extraInfo?: boolean
}

export interface ProjectProps {
  id: string;
  title: string;
  description: string;
  technologies: string;
  links: styledLinkProp[]
}

export interface ProjectCardProps {
  project: ProjectProps
}

const ProjectCard = ({ project} : ProjectCardProps) => {
  const {description, id, links, technologies, title,} = project;
  return (
    <div>
      <h4 id={id}>{title}</h4>
      <p>{description}</p>
      <p>Made with: {technologies}</p>
      <p style={{ fontSize: 14, fontWeight: 'bold'}}>Links to Deployed Site and Github Repos</p>
      <div className="links">
        {links.map((link, index)=> <StyledLink key={link.name + index} href={link.href} name={link.name} />)}
      </div>
    </div>
  )
}

const GeneralAssemblyProjects = () => (
  <div>
    <h3>During General Assembly</h3>
    <p>These projects were created at the beginning of my Software Engineering journey. They are in various states of disrepair but I intend to return to them and remake them with newer technology/understandings.</p>
    <div>
      {generalAssemblyProjects.map((project, index)=> <ProjectCard key={project.id + index} project={project} />)}
    </div>
    <style jsx>{`
      .links {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
    `}</style>
  </div>
)

export const ProjectsSection = ({extraInfo=false}: ProjectsProps): JSX.Element => (
  <section className='styled-section'>
    <Link href="/projects"><h2 id="projects-section" title="Check out more projects">Projects and Tech</h2></Link>
      <div>
        <p>Currently Working on:</p>
        {currentProjects.map((project)=> <ProjectCard key={project.id} project={project} />)}
      </div>
      <div>
        Technologies I've worked with: 
        <div></div>
      </div>
      {extraInfo ? <GeneralAssemblyProjects /> : null}
  </section>
)
