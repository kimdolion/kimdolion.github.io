import { useContext } from "react"
import { ThemeContext } from "@/utils"
import styles from '@/styles/Home.module.css'
import Link from "next/link";
import Image from "next/image";
import { StyledLink } from "./StyledLink";

import GithubIcon from './icons/GithubIcon';
import vercel from '/public/vercel.svg'
import LinkedInIcon from "./icons/LinkedInIcon";


export const Footer = () => {
    const { isDarkMode } = useContext(ThemeContext)
  
    return  (
      <footer className={`${styles.footer}`}>
        <StyledLink href="https://github.com/kimdolion" name="My Github" leftIcon>
          <GithubIcon width="1.5em" fill={isDarkMode ? "white" : ""}  />
        </StyledLink>
        <StyledLink href="https://linkedin.com/in/kimberly-wilkes" name="Linkedin" leftIcon><LinkedInIcon fill={isDarkMode ? "white" : "" } width="1.5em" /></StyledLink>
        <Link
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.styledLink}
        >
          Powered by <Image src={vercel} alt="Vercel Logo." height={75} width={75} />
        </Link>
      </footer>
    )
}