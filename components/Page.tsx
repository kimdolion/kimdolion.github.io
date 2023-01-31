import { ReactNode, useContext } from 'react'
import styles from '@/styles/Home.module.css'

import { ThemeContext } from '@/utils';
import { Header } from './Header';
import { Footer } from './Footer';

export interface PageProps {
  children: ReactNode;
}

export const Page = ({ children }: PageProps): JSX.Element => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`${theme} ${styles.container}`}>
      <Header />
      <main className={`${theme}-main`} style={{display: 'flex', justifyContent: 'center', paddingBottom: '5rem'}}>{children}</main>
      <Footer />
    </div>
  )
  
}