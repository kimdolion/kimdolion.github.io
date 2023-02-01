import { useContext, useRef, useState } from "react";
import { MobileContext, ThemeContext, useOutsideClick } from "@/utils";
import Link from "next/link";
import { useRouter } from "next/router";
import { StyledLink, styledLinkProp } from "./StyledLink";
import { BurgerMenu } from "./BurgerMenu";
import Image from "next/image";
import styles from '@/styles/Home.module.css'

import DayIcon from './icons/DayIcon';
import NightIcon from './icons/NightIcon';
import LinkedInIcon from "./icons/LinkedInIcon";
import GithubIcon from "./icons/GithubIcon";

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



export const Header = () => {
    const { theme, handleTheme } = useContext(ThemeContext)
    const { isMobile } = useContext(MobileContext)
    const [isActive, setIsActive] = useState(false)
    const isDarkMode = theme === 'dark'

    const DarkButton = () => <button onClick={handleTheme} className={styles.darkThemeButton} title="Dark Mode"><NightIcon fill="white" width={'1.5em'} /></button>
    const LightButton = () => <button onClick={handleTheme} className={styles.lightThemeButton} title="Light Mode"><DayIcon fill="orange" width={'1.5em'} /></button>

    const NavLinksTSX = () => (
        <>
            {navLinks.map((navLink, index) => <ActiveLink key={'nav-link-' + index} href={navLink.href} name={navLink.name} />)}
            {isDarkMode ? <DarkButton /> : <LightButton />}
        </>
    )

    const ref = useRef<HTMLDivElement>(null)

    useOutsideClick(ref, () => {
        setIsActive(false);
    });

    return (
        <header className={`${styles.header}`} style={{boxShadow: `0 1px 30px -10px ${isDarkMode ?  'black' : 'gray'}` }}>
            <div style={{alignItems: 'center', display: 'flex', gap: 10}}>
                <Link href="/" className={styles.navLogo} >
                    Kimberly Wilkes
                </Link>
                |
                <StyledLink href="https://github.com/kimdolion" name="" leftIcon>
                    <GithubIcon width="1.5em" fill={isDarkMode ? "white" : ""}  />
                </StyledLink>
                |
                <StyledLink href="https://linkedin.com/in/kimberly-wilkes" name="" leftIcon>
                    <LinkedInIcon fill={isDarkMode ? "white" : "" } width="1.5em" />
                </StyledLink>
            </div>
            <nav id="nav-section" aria-label="Navigation Links" className={styles.navList}>
                {isMobile ?
                <div ref={ref}>
                    <BurgerMenu open={isActive} setOpen={setIsActive} />
                    {isActive ? <div className={styles.mobileMenu} style={{backgroundColor: isActive ? '#6e0202' : '', color: '#f4f6f99a' }}>
                        <p style={{color: '#f4f6f9'}}>Learn more:</p>
                        <NavLinksTSX />
                    </div> : null }
                </div>
                :
                    <NavLinksTSX />
                }
            </nav>
        </header>

    )
}