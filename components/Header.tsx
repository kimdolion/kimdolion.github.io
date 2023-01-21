import Image from 'next/image'
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
          <Image src={'/public/kor_am_flag.jpg'} height={10} width={10} alt={"Korean American blended flag from MultinationalPatriot by OnjenaYo"} />
          <h1>{title}</h1>
        </div>
        <div>
        </div>
      </div>
    </header>
    <style jsx>{`
      .wrapper {
        font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial,
          sans-serif;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        padding: 15px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      svg {
        display: inline-block;
        vertical-align: top;
      }
      h1 {
        font-weight: 900;
        font-size: 20px;
        line-height: 1;
        margin: 6px 0 6px 10px;
        display: inline-block;
        vertical-align: top;
      }
      button + button {
        margin-left: 10px;
      }
    `}</style>
  </>
)
