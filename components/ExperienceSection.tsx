import { ReactNode } from 'react'
import Link from 'next/link';
import { WORK_EXPERIENCES } from '@/constants';
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

const ExperienceDetails = (experienceWork: ExperienceDetailsProps = WORK_EXPERIENCES[0], extraInfo: boolean) => {
  const {company, headingProps, location, responsibilities, extraDetails} = experienceWork;

  return (
      <div style={{margin: extraInfo ? '2rem 0' : 0}}>
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

const workExperiencesTSX = WORK_EXPERIENCES.map((experience: ExperienceDetailsProps, index: number)=> <ExperienceDetails key={experience.company + index} {...experience} />)

export const ExperienceSection = ({extraInfo=false}: ExperienceProps): JSX.Element => (
  <Section>
      {extraInfo ? <h1 id="experience-section" title="Want to see more work history?"><Link href="/experience" className={styles.styledLink}>{extraInfo ? '': 'Recent'} Work Experience</Link></h1>
    : <h2 id="experience-section" title="Want to see more work history?"><Link href="/experience" className={styles.styledLink}>{extraInfo ? '': 'Recent'} Work Experience</Link></h2>
    }
      {extraInfo ? workExperiencesTSX : <ExperienceDetails {...WORK_EXPERIENCES[0]} />}
  </Section>
)
