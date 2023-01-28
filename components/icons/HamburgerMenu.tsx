import { SVGProps } from "react"

const HamburgerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill={props.fill}
    height={props.height}
    strokeLinecap="round" 
    strokeLinejoin="round"
    width={props.width}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    >
    <svg className="w-8 h-8 text-gray-500" fill="none" 
     strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"></svg>
    <path d="M4 6h16M4 12h16M4 18h16"
      stroke={props.stroke}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default HamburgerIcon
