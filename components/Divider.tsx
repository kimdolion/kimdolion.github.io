import { ThemeContext } from "@/utils"
import { useContext } from "react"

interface DividerProps {
    lineThickness?: string;
}

/**
 * 
 * @param lineThickness string such as 1px or 2rem etc; default is 1px
 * @returns A line divider that switches between black and white and can have its line thickness set
 */
export const Divider = ({lineThickness = '1px'}: DividerProps) => {
    const {theme} = useContext(ThemeContext)

    return <div style={{ borderBottom: `${lineThickness} solid ${theme === 'dark' ? 'white' : 'black'}`, borderRadius: '1px', width: '100%'}} />
}