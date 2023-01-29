import Image from 'next/image'
import Link from 'next/link';
import React, { useContext } from 'react'
import styles from '@/styles/Home.module.css'

import { getRandomFact, ThemeContext } from '@/utils';
import { randomFacts } from '@/constants';
import profilePhoto from '/public/profile.jpg'
import { Section } from './Section';

export interface AboutProps {
    extraInfo?: boolean
}
// const randomFact = getRandomFact();

const RandomFactList = () => <ul>{randomFacts.map((randomFact, index)=>  <li key={'random-fact-' + index}>{randomFact}</li>)}</ul>

export const AboutSection = ({ extraInfo = false }: AboutProps): JSX.Element => {
  const { theme } = useContext(ThemeContext)

  return (
    <Section>
      <div className={`${styles.profilePhoto}`}>
        <div style={{ margin: 'auto 1rem'}}>
          <Image src={profilePhoto} alt="Profile photo of Kimberly Wilkes." height={260} width={180} style={{borderRadius: 10}} />
        </div>
        <div>
          <Link href="/about"><h2 id="about-section" title="Learn more">About Kimberly Wilkes</h2></Link>
          <div>
            <p style={{fontSize: 18, fontWeight: 'bold'}}>Hello!</p>
            <p>I am a fullstack software engineer, former educator, and lifetime learner, with a passion for user-centered and responsive web design. 
              I pride myself on my flexibility and willingness to try something new, which are key to being a web developer.</p>
            {extraInfo ? <RandomFactList /> : null }
          </div>
        </div>
      </div>
    </Section>
  )
}
