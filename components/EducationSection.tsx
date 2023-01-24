import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { educationDetails } from '@/constants';

import { InlineHeading, InlineHeadingProps } from './InlineHeading';

export interface EducationDetailsProps {
  certification: string;
  extraDetails: string;
  headingProps: InlineHeadingProps;
  schoolColor?: string;
}

export interface EducationProps {
    extraInfo?: boolean
}

// TODO: decide whether to incorporate the school colors
export const EducationSection = ({extraInfo=false}: EducationProps): JSX.Element => (
  <section className='styled-section'>
      <Link href="/education"><h2 id="education-section">Education</h2></Link>
      {educationDetails.map((educationDetail, index)=> {
        const {certification, extraDetails, headingProps } = educationDetail;
        return (
        <div key={headingProps.id + index} id={headingProps.id}>
          <InlineHeading {...headingProps} />
          <p>{certification}</p>
          {extraInfo ? <p>{extraDetails}</p> : null}
        </div>
        )}
      )}
  </section>
)