import Image from 'next/image'
import Link from 'next/link';
import styles from '@/styles/Home.module.css'

import { getRandomFact } from '@/utils';
import { randomFacts } from '@/constants';
import profilePhoto from '/public/profile.jpg'
import { Section } from './Section';
import { StyledLink } from './StyledLink';
import { ImageOverlay } from './ImageOverlay';
import korAmFlag from '/public/kor_am_flag.jpg'

export interface AboutProps {
    extraInfo?: boolean
}
const randomFact = getRandomFact();

const RandomFactList = () => <ul>{randomFacts.map((randomFact, index)=>  <li key={'random-fact-' + index}>{randomFact}</li>)}</ul>

export const AboutSection = ({ extraInfo = false }: AboutProps): JSX.Element => {
  const currentlyLooking = true;

  return (
    <Section>
      <ImageOverlay image={{src: profilePhoto, alt: "Profile photo of Kimberly Wilkes."}} imageText="Hello!" />
      <div style={{ display:'flex', justifyContent: 'center'}}>
        <Link href="/about"><h2 id="about-section" title="Learn more" className={styles.styledLink}>Kimberly Wilkes</h2></Link>
      </div>
      <div>
        <p>I'm a software engineer, former educator, and lifetime learner, with a passion for user-centered and responsive web design.</p>
        <p>My recent work exposed me to many different industries and technologies though I find myself most at home with the frontend in React (Typescript).</p>
        {currentlyLooking && <p>Currently looking for my next opportunity to dive deeper into the ever evolving world of tech! Let's connect on <StyledLink href="https://linkedin.com/in/kimberly-wilkes" name="Linkedin"></StyledLink>?</p>}
        {extraInfo ? <RandomFactList /> : <p>You can learn even more about me, my work history, education, and projects on their respective pages.</p> }
      </div>
      <div style={{ display:'flex', justifyContent: 'center', margin: '5rem' }}>
        <Image src={korAmFlag} height={100} width={100} alt={"Korean American blended flag."} style={{borderRadius: 100}} />
      </div>
    </Section>
  )
}
