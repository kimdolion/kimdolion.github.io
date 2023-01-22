import Link from 'next/link';
import React, { ReactNode } from 'react'
import { workExperiences } from '../constants';

import { InlineHeading, InlineHeadingProps } from './InlineHeading';

export interface ExperienceProps {
    extraInfo?: boolean
}

export interface ExperienceDetailsProps {
  headingProps: InlineHeadingProps;
  company: string;
  location: string;
  responsibilities: string[];
  extraDetails: ReactNode 
}

const ExperienceDetails = (experienceWork: ExperienceDetailsProps = workExperiences[0], extraInfo: boolean) => {
  const {company, headingProps, location, responsibilities, extraDetails} = experienceWork;

  return (
      <div>
        <InlineHeading {...headingProps} />
        <div>{company} in {location}</div>
        <ul>
          {responsibilities.map((responsibility: string, index: number)=> (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
        {extraInfo && extraDetails ? <div>{extraDetails}</div>: null}
      </div>
  )
}

const workExperiencesTSX = workExperiences.map((experience: ExperienceDetailsProps, index: number)=> <ExperienceDetails key={experience.location+ index} {...experience} />)

export const ExperienceSection = ({extraInfo=false}: ExperienceProps): JSX.Element => (
  <>
    <section>
        <Link href="/experience"><h2>{extraInfo ? '': 'Recent'} Work Experience</h2></Link>
        {extraInfo ? workExperiencesTSX : <ExperienceDetails {...workExperiences[0]} />}
    </section>
    <style jsx>{`
      section {
        max-width: 700px;
      }
    `}</style>
  </>
)
