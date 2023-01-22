import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { getRandomFact } from '../utils';

export interface AboutProps {
    extraInfo?: boolean
}
const randomFact = getRandomFact();
export const AboutSection = ({extraInfo=false}: AboutProps): JSX.Element => (
  <>
    <section>
      <div className="column">
        <Image src="/public/profile.jpg" alt="Profile photo of Kimberly Wilkes." height={200} width={150} />
      </div>
      <div>
        <Link href="/about"><h2>About Kimberly</h2></Link>
        <div>
          <h3>Hello!</h3>
          <p>I am a software engineer, former educator, and lifetime learner, with a passion for understanding the world around me and uplifting all voices.</p>
          <p>I am a full stack software engineer with a passion for user-centered and responsive web design. I pride myself on my flexibility and willingness to try something new, which are key to being a web developer.</p>
        </div>
      </div>
    </section>
    <style jsx>{`
      button + button {
        margin-left: 10px;
      }
      section {
        display: flex;
        max-width: 700px;
      }
      .column {
        width: 30%;
      }
    `}</style>
  </>
)
