import { ReactNode } from 'react'
import styles from '@/styles/Home.module.css'

import { useTheme } from '@/utils';
import { Header } from './Header';
import { Footer } from './Footer';

export interface PageProps {
  children: ReactNode;
}

export const Page = ({ children }: PageProps): JSX.Element => {
  const { theme } = useTheme();

  return (
    <div className={`${theme} ${styles.container}`}>
      <Header />
      <main role='main' className={`${theme}-main toc-layout`} style={{display: 'flex', justifyContent: 'center', paddingBottom: '5rem'}}>{children}</main>
      <Footer />
    </div>
  )
}