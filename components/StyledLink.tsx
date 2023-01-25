import Link from "next/link"
import { ReactNode } from "react";

export interface styledLinkProp {
    children?: ReactNode;
    href: string,
    leftIcon?: boolean;
    name: string
}
  
export const StyledLink = ({children, href, leftIcon, name}: styledLinkProp )=> {
    return leftIcon ? <Link href={href} target="_blank" className='styled-link' style={{display: 'flex', alignItems: 'center', gap: 5 }}>{children} {name}</Link> : <Link href={href} target="_blank" className='styled-link' style={{display: 'flex', alignItems: 'center', gap: 5 }}>{name} {children}</Link>
  }