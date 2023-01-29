import { ThemeContext } from "@/utils"
import { useContext } from "react"

export const Divider = () => {
    const {theme} = useContext(ThemeContext)

    return <div style={{ borderBottom: `1px solid ${theme === 'dark' ? 'white' : 'black'}`, width: '100%'}} />
}