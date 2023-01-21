import React, { ReactNode } from 'react'
import Link from 'next/link'
import { Header } from './Header'
import styles from '../styles/Home.module.css'
export interface PageProps {
  title: string;
  children: ReactNode;
}

export const Page = ({
title, children}:PageProps) :JSX.Element => (
  <>
    <Header title={title}
    />
    <main>{children}</main>
    <footer className={styles.footer}>
      <Link href="https://github.com/kimdolion" target="_blank">Github</Link>
      <Link href="https://linkedin.com/in/kimberly-wilkes" target="_blank">LinkedIn</Link>
      <Link
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
      </Link>
      </footer>
    <style jsx>{`
      section {
        font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial,
          sans-serif;
        font-size: 14px;
        line-height: 24px;
        padding: 48px 20px;
        margin: 0 auto;
        color: #333;
      }
      h2 {
        font-weight: 900;
        font-size: 32px;
        line-height: 1;
        margin: 0 0 4px;
        display: inline-block;
        vertical-align: top;
      }
      p {
        margin: 1em 0;
      }
      a {
        text-decoration: none;
        color: #1ea7fd;
      }
      ul {
        padding-left: 30px;
        margin: 1em 0;
      }
      li {
        margin-bottom: 8px;
      }
      .tip {
        display: inline-block;
        border-radius: 1em;
        font-size: 11px;
        line-height: 12px;
        font-weight: 700;
        background: #e7fdd8;
        color: #66bf3c;
        padding: 4px 12px;
        margin-right: 10px;
        vertical-align: top;
      }
      .tip-wrapper {
        font-size: 13px;
        line-height: 20px;
        margin-top: 40px;
        margin-bottom: 40px;

        svg {
          display: inline-block;
          height: 12px;
          width: 12px;
          margin-right: 4px;
          vertical-align: top;
          margin-top: 3px;

          path {
            fill: #1ea7fd;
          }
        }
      }
    `}</style>
  </>
)
