import { Dispatch, SetStateAction } from "react"
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
export const BurgerMenu = ({open, setOpen}: BurgerMenuProps) => (
    <div id="burger-menu" className={styles.burgerMenu} aria-label='Hamburger Nav Menu' aria-expanded={open} role="button" onClick={() => setOpen(!open)} title="Click for navigation links.">
        <span className={styles.burgerMenuSpan} style={{ transform: open ? 'rotate(135deg)' : 'rotate(0)', transformOrigin: 0}} />
        <span className={styles.burgerMenuSpan} style={{ opacity: open ? 0 : 1, transform: open ? 'translateX(-20vw)' : 'translateX(0)',}} />
        <span className={styles.burgerMenuSpan} style={{ top: open ? '12px': '100px', transform: open ? 'rotate(-135deg)' : 'rotate(0)', transformOrigin: 0}} />
    </div>
)