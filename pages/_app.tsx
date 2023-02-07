import React from 'react';
import { MobileProvider, reportAccessibility, ThemeProvider } from '@/utils'
import { AppProps } from 'next/app'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MobileProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </MobileProvider>
  )
}

export default MyApp

reportAccessibility(React)