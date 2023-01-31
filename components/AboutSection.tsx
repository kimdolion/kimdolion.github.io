import { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import styles from '@/styles/Home.module.css'

import { getRandomFact, ThemeContext } from '@/utils';
import { randomFacts } from '@/constants';
import profilePhoto from '/public/profile.jpg'
import { Section } from './Section';

export interface AboutProps {
    extraInfo?: boolean
}
const randomFact = getRandomFact();

const RandomFactList = () => <ul>{randomFacts.map((randomFact, index)=>  <li key={'random-fact-' + index}>{randomFact}</li>)}</ul>

export const AboutSection = ({ extraInfo = false }: AboutProps): JSX.Element => {
  const { theme } = useContext(ThemeContext)

  return (
    <Section>
      <div className={`${styles.profilePhoto}`}>
        <div style={{backgroundImage: '/public/profile.jpg'}}>
          {/* <Image src={profilePhoto} alt="Profile photo of Kimberly Wilkes." fill style={{borderRadius: 10}} /> */}
        </div>
        <div>
          <Link href="/about"><h2 id="about-section" title="Learn more" className={styles.styledLink}>About Kimberly Wilkes</h2></Link>
          <div>
            <p style={{fontSize: 18, fontWeight: 'bold'}}>Hello!</p>
            <p>I am a fullstack software engineer, former educator, and lifetime learner, with a passion for user-centered and responsive web design. I pride myself on my flexibility and willingness to try something new, which are key to being a web developer.</p>
            {extraInfo ? <RandomFactList /> : <p>You can learn more about me, my work history, education, and projects on their respective pages.</p> }
          </div>
        </div>
      </div>
    </Section>
  )
}
