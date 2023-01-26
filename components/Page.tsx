import { ReactNode, useState } from 'react'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router';
import vercel from '/public/vercel.svg'

import { StyledLink, styledLinkProp } from './StyledLink';
import Image from 'next/image';
import korAmFlag from '/public/kor_am_flag.jpg'
import DayIcon from './icons/DayIcon';
import NightIcon from './icons/NightIcon';
import GithubIcon from './icons/GithubIcon';

export interface PageProps {
  children: ReactNode;
}

export interface HeaderProps {
  preferredColorScheme: string;
  onClick: () => void;
}

const navLinks: styledLinkProp[] = [
  {
    href: '/about', name: 'About Me'
  },
  {
    href: '/experience', name: 'Experience'
  },
  {
    href: '/education', name: 'Education'
  },
  {
    href: '/projects', name: 'Projects'
  },
]

const ActiveLink = ({ href, name }: styledLinkProp )=> {
  const router = useRouter();
  return <Link href={href} className={`${router.pathname == `${href}` ? 'active-nav': ''}`}>{name}</Link>
}

const Header = ({ preferredColorScheme, onClick }: HeaderProps): JSX.Element => {
  return (
      <header className={`${styles.header} ${preferredColorScheme}`}>
        <Link href="/" className={`${styles.nav}`} > 
          <Image src={korAmFlag} height={50} width={50} alt={"Korean American blended flag."} style={{borderRadius: '30px'}} />
          Home
        </Link>
        <nav id="nav-section" aria-label="Navigation Links" className={`${styles.nav}`} >
          {navLinks.map((navLink, index)=> <ActiveLink key={'nav-link-' + index} href={navLink.href} name={navLink.name} />)}
          {preferredColorScheme === 'day' ? <button onClick={onClick} className={`${styles.daySchemeButton}`}><DayIcon fill="orange" width={'1.5em'} /></button> : <button onClick={onClick} className={`${styles.nightSchemeButton}`}><NightIcon fill="white" width={'1.5em'} /></button>}
        </nav>
      </header>
  )
}

const Footer = (prop: { preferredColorScheme: string }) => (
    <footer className={`${styles.footer} ${prop.preferredColorScheme}`}>
      <StyledLink href="https://github.com/kimdolion/kimdolion.github.io" name="This Project's Github" leftIcon>
        <GithubIcon width="1.5em" fill={prop.preferredColorScheme === 'day' ? "": "white" } />
      </StyledLink>
      <StyledLink href="https://github.com/kimdolion" name="My Github" leftIcon>
        <GithubIcon width="1.5em" fill={prop.preferredColorScheme === 'day' ? "": "white" }  />
      </StyledLink>
      <StyledLink href="https://linkedin.com/in/kimberly-wilkes" name="Linkedin" />
      <Link
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        className="styled-link" style={{display: 'flex', alignItems: 'center' }}
      >
        Powered by <Image src={vercel} alt="Vercel Logo." height={75} width={75} />
      </Link>
    </footer>
)

export const Page = ({ children }: PageProps): JSX.Element => {
  const [preferredColorScheme, setPreferredColorScheme] = useState('night')

  const handleColorScheme =  () => {
    if (preferredColorScheme == 'night') {
      setPreferredColorScheme('day')
    } else {
      setPreferredColorScheme('night')
    }
  }
  return (
    <div className={`${preferredColorScheme} ${styles.container}`}>
      <Header onClick={handleColorScheme} preferredColorScheme={preferredColorScheme} />
      <main className={`${preferredColorScheme}-main`}>{children}</main>
      <Footer preferredColorScheme={preferredColorScheme} />
    </div>
  )
  
}