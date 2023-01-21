import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

import { Button } from './Button'

export interface EducationProps {
    extraInfo?: boolean
}

export const EducationSection = ({extraInfo=false}: EducationProps): JSX.Element => (
  <>
    <section>
        <h2>Education</h2>
        <div>
        <h3>Bunker Hill Community College</h3>
        <p>Coursework in Computer Science</p>
        <span>2019-2021</span>
        {extraInfo ? <p>extrainfo</p> : null}
        </div>
        <div>
        <h3>University of Massachusetts Boston</h3>
        <p>M.A. in Elementary Education</p>
        <span>2013-2014</span>
        {extraInfo ? <p>extrainfo</p> : null}
        </div>
        <div>
        <h3>Amherst College</h3>
        <span>2009-2013</span>
        <p>B.A. in Black Studies and Psychology</p>
        {extraInfo ? <p>extrainfo</p> : null}
        </div>
    </section>
    <style jsx>{`
      button + button {
        margin-left: 10px;
      }
      section {
        max-width: 700px;
      }
    `}</style>
  </>
)
