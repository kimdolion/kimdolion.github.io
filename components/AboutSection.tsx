import Image from 'next/image'
import Link from 'next/link';
import styles from '@/styles/Home.module.css'

import { getRandomFact } from '@/utils';
import { RANDOM_FACTS } from '@/constants';
import profilePhoto from '/public/profile.jpg'
import { Section } from './Section';
import { StyledLink } from './StyledLink';
import { ImageOverlay } from './ImageOverlay';
import korAmFlag from '/public/kor_am_flag.jpg'

export interface AboutProps {
    extraInfo?: boolean
}
const randomFact = getRandomFact();

const RandomFactList = () => <ul>{RANDOM_FACTS.map((randomFact, index)=>  <li key={'random-fact-' + index}>{randomFact}</li>)}</ul>

const RandomFactDetail = () => <div>Random Fact: <p>{randomFact}</p></div>


export const AboutSection = ({ extraInfo = false }: AboutProps): JSX.Element => {
  const currentlyLooking = true;

  return (
    <Section>
      <div className={styles.profilePhoto}>
        <ImageOverlay image={{src: profilePhoto, alt: "Profile photo of Kimberly Wilkes."}}>Hello!</ImageOverlay>
      </div>
      <div style={{ display:'flex', justifyContent: 'center'}}>
        <Link href="/about"><h2 id="about-section" title="Learn more" className={styles.styledLink}>Kimberly Wilkes</h2></Link>
      </div>
      <div>
        <p>I'm a software engineer, former educator, and hobby cosplayer; in short a lifetime learner and problem solver, with a passion for user-centered and responsive web design.</p>
        <p>I've worked with many different industries and technologies though I find myself most at home with the frontend in React (Typescript). I've worked with React Native </p>
        {currentlyLooking && <p>Currently looking for my next opportunity as a software engineer! Let's connect on <StyledLink href="https://linkedin.com/in/kimberly-wilkes" name="Linkedin"></StyledLink>.</p>}
        {extraInfo ? <RandomFactDetail /> : <p>Learn even more about me, my work history, education, and projects on their respective pages.</p> }
      </div>
      <div style={{ display:'flex', justifyContent: 'center', marginTop: '3rem' }}>
        <Image src={korAmFlag} height={100} width={100} alt={"Korean and US flag merged by Onjena Yo of Carbon-Fibre Media."} title="Korean and US flag merged by Onjena Yo of Carbon-Fibre Media." style={{borderRadius: 100}} />
      </div>
    </Section>
  )
}
