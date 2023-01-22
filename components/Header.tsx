import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

import { Button } from './Button'

export interface HeaderProps {
  title: string;
}

export const Header = ({title}: HeaderProps): JSX.Element => (
  <>
    <header>
      <div className="wrapper">
        <div>
          <Link href="/">
            <Image src={'/public/kor_am_flag.jpg'} height={10} width={10} alt={"Korean American blended flag."} />
          </Link>
          <h1>{title}</h1>
        </div>
        <div>
          <nav>
            <Link href="/about">About Me</Link>
            <Link href="/experience">Experience</Link>
            <Link href="/education">Education</Link>
            <Link href="/projects">Projects</Link>
          </nav>
        </div>
      </div>
    </header>
    <style jsx>{`
      button + button {
        margin-left: 10px;
      }
      h1 {
        display: inline-block;
        font-size: 20px;
        font-weight: 900;
        line-height: 1;
        margin: 6px 0 6px 10px;
        vertical-align: top;
      }
      svg {
        display: inline-block;
        vertical-align: top;
      }
      .wrapper {
        align-items: center;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        display: flex;
        font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        justify-content: space-between;
        padding: 15px 20px;
        width: '100%';
      }
    `}</style>
  </>
)
