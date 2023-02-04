import React from 'react';
import { MobileProvider, ThemeProvider } from '@/utils'
import { AppProps } from 'next/app'
import '../styles/globals.css'

if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
  const ReactDOM = require('react-dom');
  const axe = require('@axe-core/react');
  axe(React, ReactDOM, 1000);
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MobileProvider>
      <ThemeProvider value={"Dark"}>
        <Component {...pageProps} />
      </ThemeProvider>
    </MobileProvider>
  )
}

export default MyApp
