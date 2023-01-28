import React, { ReactNode, useContext } from 'react'
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
import { ThemeContext } from '@/utils';

export interface PageProps {
  children: ReactNode;
}

export interface HeaderProps {
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

const ActiveLink = ({ href, name, title }: styledLinkProp )=> {
  const router = useRouter();
  return <Link href={href} className={`${router.pathname == `${href}` ? 'active-nav': ''}`} title={title}>{name}</Link>
}

const Header = () => {
  const { theme, handleTheme } = useContext(ThemeContext)
  
  return (
      <header className={`${styles.header} ${theme}`}>
        <Link href="/" className={`${styles.nav}`} > 
          <Image src={korAmFlag} height={50} width={50} alt={"Korean American blended flag."} style={{borderRadius: '30px'}} />
          Home
        </Link>
        <nav id="nav-section" aria-label="Navigation Links" className={`${styles.nav}`} >
          {navLinks.map((navLink, index)=> <ActiveLink key={'nav-link-' + index} href={navLink.href} name={navLink.name} />)}
          {theme === 'light' ? <button onClick={handleTheme} className={`${styles.lightThemeButton}`} title="Light Mode"><DayIcon fill="orange" width={'1.5em'} /></button> : <button onClick={handleTheme} className={`${styles.darkThemeButton}`} title="Dark Mode"><NightIcon fill="white" width={'1.5em'} /></button>}
        </nav>
      </header>
  )
}

const Footer = () => {
  const { theme } = useContext(ThemeContext)

  return  (
    <footer className={`${styles.footer} ${theme}`}>
      <StyledLink href="https://github.com/kimdolion/kimdolion.github.io" name="This Project's Github" leftIcon>
        <GithubIcon width="1.5em" fill={theme === 'light' ? "": "white" } />
      </StyledLink>
      <StyledLink href="https://github.com/kimdolion" name="My Github" leftIcon>
        <GithubIcon width="1.5em" fill={theme === 'light' ? "": "white" }  />
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
}

export const Page = ({ children }: PageProps): JSX.Element => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`${theme} ${styles.container}`}>
      <Header />
      <main className={`${theme}-main`}>{children}</main>
      <Footer />
    </div>
  )
  
}