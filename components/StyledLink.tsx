import { ReactNode } from "react";
import Link from "next/link"
import styles from '@/styles/Home.module.css'

export interface styledLinkProp {
    children?: ReactNode;
    href: string,
    leftIcon?: boolean;
    name: string
    title?: string;
}
  
/**
 * Styled Nextjs Link that opens the target in a new tab. Can also display an icon to the left or right of the text by passing @param leftIcon
*/
export const StyledLink = ({children, href, leftIcon, name}: styledLinkProp )=> {
    return leftIcon ? <Link href={href} target="_blank" className={styles.styledLink}>{children} {name}</Link> : <Link href={href} target="_blank" className={styles.styledLink}>{name} {children}</Link>
  }