import { ReactNode } from 'react'
import Link from 'next/link';
import { workExperiences } from '@/constants';
import { Divider } from './Divider';
import styles from '@/styles/Home.module.css'

import { InlineHeading, InlineHeadingProps } from './InlineHeading';
import { Section } from './Section';

export interface ExperienceProps {
    extraInfo?: boolean
}

export interface ExperienceDetailsProps {
  headingProps: InlineHeadingProps;
  company: string;
  location: string;
  responsibilities: string[];
  extraDetails: ReactNode;
}

const ExperienceDetails = (experienceWork: ExperienceDetailsProps = workExperiences[0], extraInfo: boolean) => {
  const {company, headingProps, location, responsibilities, extraDetails} = experienceWork;

  return (
      <div style={{margin: '2rem 0'}}>
        <InlineHeading {...headingProps} />
        <div>{company} in {location}</div>
        <ul>
          {responsibilities.map((responsibility: string, index: number)=> (
            <li key={"responsibility-" + index}>{responsibility}</li>
          ))}
        </ul>
        {extraInfo && extraDetails ? <div style={{padding: '2rem 0'}}>{extraDetails}</div>: null}
        <Divider />
      </div>
  )
}

const workExperiencesTSX = workExperiences.map((experience: ExperienceDetailsProps, index: number)=> <ExperienceDetails key={experience.company + index} {...experience} />)

export const ExperienceSection = ({extraInfo=false}: ExperienceProps): JSX.Element => (
  <Section>
      <Link href="/experience" className={styles.styledLink}><h2 id="experience-section" title="Want to see more work history?">{extraInfo ? '': 'Recent'} Work Experience</h2></Link>
      {extraInfo ? workExperiencesTSX : <ExperienceDetails {...workExperiences[0]} />}
  </Section>
)
