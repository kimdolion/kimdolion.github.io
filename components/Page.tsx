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
        <div>
          <div className="column">
            <Link href="/">
              <Image src={'/public/kor_am_flag.jpg'} height={10} width={10} alt={"Korean American blended flag."} />
            </Link>
            <h1>{title}</h1>
          </div>
          <nav>
            {navLinks.map((navLink, index)=> <ActiveLink key={navLink.name + index} href={navLink.href} name={navLink.name} />)}
            <input type="checkbox"
            onClick={onClick} />
          </nav>
        </div>
      </header>
      <style jsx>{`
        h1 {
          font-size: 20px;
          font-weight: 900;
          line-height: 1;
          margin: 6px 0 6px 10px;
          vertical-align: top;
        }
        nav {
          display: flex;
          justify-content: space-evenly;
          max-width: 40%;
        }
        .wrapper {
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
          padding: 15px 20px;
          width: 100%;
        }
      `}</style>
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
  const [preferredColorScheme, setPreferredColorScheme] = useState('dark')

  const handleColorScheme =  () => {
    console.log("handleColorScheme")
    setPreferredColorScheme('light')
  }
  return (
    <div className={`${preferredColorScheme} ${styles.container}`}>
      <Header title={title} onClick={handleColorScheme} />
      <main>{children}</main>
      <Footer />
      <style jsx>{`
        section {
          font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial,
            sans-serif;
          font-size: 14px;
          line-height: 24px;
          padding: 48px 20px;
          margin: 0 auto;
          max-width: 700px;
          color: #333;
        }
        h2 {
          font-weight: 900;
          font-size: 32px;
          line-height: 1;
          margin: 0 0 4px;
          display: inline-block;
          vertical-align: top;
        }
        p {
          margin: 1em 0;
        }
        ul {
          padding-left: 30px;
          margin: 1em 0;
        }
        li {
          margin-bottom: 8px;
        }
      `}</style>
    </div>
  )
  
}