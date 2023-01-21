import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

import { Button } from './Button'

export interface AboutProps {
    extraInfo?: boolean
}

export const AboutSection = ({extraInfo=false}: AboutProps): JSX.Element => (
  <>
    <section>
        <h2>About Kimberly</h2>
        <div>
        <h3>Hello!</h3>
          <p>I am a software engineer, former educator, and lifetime learner, with a passion for understanding the world around me and uplifting all voices. I am a full stack software engineer with a passion for user-centered and responsive web design. I pride myself on my flexibility and willingness to try something new, which are key to being a web developer.</p>
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
