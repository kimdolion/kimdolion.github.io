import { ReactNode, useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';
import Image from 'next/image';
import { StyledLink, styledLinkProp } from './StyledLink';
export interface PageProps {
  title: string;
  children: ReactNode;
}

export interface HeaderProps {
  title: string;
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

const ActiveLink = ({href, name}: styledLinkProp )=> {
  const router = useRouter();
  return <Link href={href} className={router.pathname == `${href}` ? 'active' : ''}>{name}</Link>
}

const Header = ({title, onClick}: HeaderProps): JSX.Element => {
  return (
    <>
      <header className="wrapper">
        <div className="">
          <div>
            <Link href="/">
              <Image src={'/public/kor_am_flag.jpg'} height={10} width={10} alt={"Korean American blended flag."} />
            </Link>
            <h3>{title}</h3>
          </div>
          <div id="nav-section">
            {navLinks.map((navLink, index)=> <ActiveLink key={navLink.name + index} href={navLink.href} name={navLink.name} />)}
            <input type="checkbox"
            onClick={onClick} />
          </div>
        </div>
      </header>
    </>
  )
}

const Footer = () => (
    <footer className={`${styles.footer}`}>
      <StyledLink href="https://github.com/kimdolion/kimdolion.github.io" name="This Project's Github" />
      <Link href="https://github.com/kimdolion" target="_blank" className="styledLink">My Github</Link>
      <Link href="https://linkedin.com/in/kimberly-wilkes" target="_blank" className="styledLink">Connect on LinkedIn</Link>
      <Link
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank" className="styledLink"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
      </Link>
    </footer>
)

export const Page = ({
title, children}:PageProps): JSX.Element => {
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
      <Header title={title} onClick={handleColorScheme} />
      <main>{children}</main>
      <Footer />
    </div>
  )
  
}