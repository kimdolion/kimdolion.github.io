import { ReactNode } from 'react';
import styles from '@/styles/Home.module.css'

interface SectionProps {
    children: ReactNode;
}

export const Section = ({children}: SectionProps) => {

return (
    <section className={`${styles.styledSection}`}>{children}</section>
    ) 
}