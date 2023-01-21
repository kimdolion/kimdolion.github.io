import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

import { Button } from './Button'

export interface ExperienceProps {
    extraInfo?: boolean
}

export const ExperienceSection = ({extraInfo=false}: ExperienceProps): JSX.Element => (
  <>
    <section>
        <h2>Work Experience</h2>
        <div>
        <h3>Echobind</h3>
          <p>Computer Science Coursework</p>
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
