import Head from 'next/head'
import { Page } from '@/components/Page'
import { AboutSection } from '@/components/AboutSection'

export default function About() {
  return (
    <div>
      <Head>
        <title>About Kimberly Wilkes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Page title="About Me">
        I'm awesome!
        <AboutSection extraInfo />
      </Page>
    </div>
  )
}
