import { Dispatch, SetStateAction, useContext } from "react"
import { ThemeContext } from "@/utils"
import styles from '@/styles/Home.module.css'

interface BurgerMenuProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>
}

/**
 *
 * @param open boolean, @param setOpen useState
 * @returns a mobile friendly burger menu made out of divs that change color and transformation based on open param
 */
export const BurgerMenu = ({open, setOpen}: BurgerMenuProps) => {
    const { isDarkMode } = useContext(ThemeContext)

    return (
        <div id="burger-menu" className={styles.burgerMenu} aria-label='Hamburger Nav Menu' aria-expanded={open} role="button" onClick={() => setOpen(!open)} title="Click for navigation links.">
            <span style={{ borderBottom: `3px solid ${isDarkMode ? 'white' : 'black'}`, borderRadius: '5px', transform: open ? 'rotate(135deg)' : 'rotate(0)', transformOrigin: 0, transition: '.3s ease-out', width: '100%'}} />
            <span style={{ borderBottom: `3px solid ${isDarkMode ? 'white' : 'black'}`, borderRadius: '5px', opacity: open ? 0 : 1, transform: open ? 'translateX(-20vw)' : 'translateX(0)',  transition: '.3s ease-out', width: '100%'}} />
            <span style={{ borderBottom: `3px solid ${isDarkMode ? 'white' : 'black'}`, borderRadius: '5px', top: open ? '12px': '100px', transform: open ? 'rotate(-135deg)' : 'rotate(0)', transformOrigin: 0, transition: '.3s ease-out', width: '100%'}} />
        </div>
    )
}