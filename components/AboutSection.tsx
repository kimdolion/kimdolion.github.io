import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { getRandomFact } from '@/utils';
import { randomFacts } from '@/constants';
import profilePhoto from '/public/profile.jpg'

export interface AboutProps {
    extraInfo?: boolean
}
// const randomFact = getRandomFact();

const RandomFactList = () => <ul>{randomFacts.map((randomFact, index)=>  <li key={'random-fact-' + index}>{randomFact}</li>)}</ul>

export const AboutSection = ({ extraInfo = false }: AboutProps): JSX.Element => (
  <>
    <section className='styled-section'>
      <div style={{display: 'flex', flexDirection:'row', gap: 20 }}>
        <div style={{ margin: 'auto 1rem'}}>
          <Image src={profilePhoto} alt="Profile photo of Kimberly Wilkes." height={260} width={180} style={{borderRadius: 50}} />
        </div>
        <div>
          <Link href="/about"><h2 id="about-section">About Kimberly Wilkes</h2></Link>
          <div>
            <h3>Hello!</h3>
            <p>I am a software engineer, former educator, and lifetime learner, with a passion for understanding the world around me and uplifting all voices.</p>
            <p>I am a full stack software engineer with a passion for user-centered and responsive web design. 
              I pride myself on my flexibility and willingness to try something new, which are key to being a web developer.</p>
            {extraInfo ? <RandomFactList /> : null }
          </div>
        </div>
      </div>
    </section>
    <style jsx>{`
      .column {
        width: 30%;
      }
    `}</style>
  </>
)
