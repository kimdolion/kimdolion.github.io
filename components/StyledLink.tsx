import Link from "next/link"

export interface styledLinkProp {
    href: string,
    name: string
}
  
export const StyledLink = ({href, name}: styledLinkProp )=> {
    return <Link href={href} target="_blank" className='styledLink'>{name}</Link>
  }