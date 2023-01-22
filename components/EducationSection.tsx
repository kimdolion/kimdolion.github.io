import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

import { InlineHeading } from './InlineHeading';

export interface EducationProps {
    extraInfo?: boolean
}
//  BHCC: style={{color: '#c8102e'}}
//  UMass Boston: style={{color: '#005A8B'}}
//  Amherst: style={{color: '#4d1979'}}
export const EducationSection = ({extraInfo=false}: EducationProps): JSX.Element => (
  <>
    <section>
        <Link href="/education"><h2>Education</h2></Link>
        <div>
          <InlineHeading mainHeadingText='Bunker Hill Community College' startYear={2019} endYear={2021} url="https://www.bhcc.edu/" />
          <p>Coursework in Computer Science</p>
          {extraInfo ? <p>Coursework included Java, C++, SQL, and Data Structures</p> : null}
        </div>
        <div>
          <InlineHeading mainHeadingText='University of Massachusetts Boston' startYear={2013} endYear={2014} url="https://www.umb.edu/" />
          <p>M.A. in Elementary Education</p>
          {extraInfo ? <p>Worked in Boston Public Schools as an elementary and middle school teacher for grades 2nd to 7th. Earned certifications in Special Education and English as a Second Language.</p> : null}
        </div>
        <div>
          <InlineHeading mainHeadingText='Amherst College' startYear={2009} endYear={2013} includeURL url="https://www.amherst.edu/" />
          <p>B.A. in Black Studies and Psychology</p>
          {extraInfo ? <p>Clubs/Organizations: Amherst Mixed Martial Arts Organization (AMMO): Isshinryu and Brazilian Jiu Jitsu, Amherst Pride Alliance, Board Games Club, Japanese Animation Club (Anime Club): Co-president, RESULTS, Inc.Student Security, THiNK</p> : null}
        </div>
    </section>
    <style jsx>{`
      section {
        max-width: 700px;
      }
    `}</style>
  </>
)
