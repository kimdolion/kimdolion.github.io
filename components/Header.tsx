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
            <Image src={'/public/kor_am_flag.jpg'} height={10} width={10} alt={"Korean American blended flag from MultinationalPatriot by OnjenaYo"} />
          </Link>
          <h1>{title}</h1>
        </div>
        <div>
          <nav>
            <Link href="/about">About Me</Link>
            <Link href="/experience">Experience</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/education">Education</Link>
          </nav>
        </div>
      </div>
    </header>
    <style jsx>{`
      button + button {
        margin-left: 10px;
      }
      h1 {
        font-weight: 900;
        font-size: 20px;
        line-height: 1;
        margin: 6px 0 6px 10px;
        display: inline-block;
        vertical-align: top;
      }
      svg {
        display: inline-block;
        vertical-align: top;
      }
      .wrapper {
        font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial,
          sans-serif;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        padding: 15px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }


    `}</style>
  </>
)
