import Link from 'next/link';
import { EDUCATION_DETAILS } from '@/constants';
import styles from '@/styles/Home.module.css'

import { InlineHeading, InlineHeadingProps } from './InlineHeading';
import { Section } from './Section';
import { Divider } from './Divider';

export interface EducationDetailsProps {
  certification: string;
  extraDetails: string;
  headingProps: InlineHeadingProps;
  schoolColor: string;
}

export interface EducationProps {
    extraInfo?: boolean
}

export const EducationSection = ({ extraInfo = false }: EducationProps): JSX.Element => (
  <Section>
      <Link href="/education" title="Curious about my education history?" className={styles.styledLink}><h2 id="education-section">Education</h2></Link>
      {EDUCATION_DETAILS.map((educationDetail, index)=> {
        const { certification, extraDetails, headingProps } = educationDetail;
        return (
        <div key={headingProps.id + index} style={{padding: '0.5rem 0'}}>
          <InlineHeading {...headingProps} includeURL={extraInfo} />
          <p>{certification}</p>
          {extraInfo ? <p style={{padding: '1rem 0'}}>{extraDetails}</p> : null}
          {extraInfo ? <Divider /> : null}
        </div>
        )}
      )}
  </Section>
)