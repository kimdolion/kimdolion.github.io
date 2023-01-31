import { useContext } from "react"
import { ThemeContext } from "@/utils"
import styles from '@/styles/Home.module.css'
import Link from "next/link";
import Image from "next/image";
import { StyledLink } from "./StyledLink";

import GithubIcon from './icons/GithubIcon';
import vercel from '/public/vercel.svg'


export const Footer = () => {
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
          className={styles.styledLink}
        >
          Powered by <Image src={vercel} alt="Vercel Logo." height={75} width={75} />
        </Link>
      </footer>
    )
}