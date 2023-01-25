import Head from 'next/head'
import { Page } from '@/components/Page'
import { AboutSection } from '@/components/AboutSection'
import { TableOfContents } from '@/components/TableOfContents'

export default function About() {
  return (
    <div>
      <Head>
        <title>About Kimberly Wilkes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Page>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <AboutSection extraInfo />
        </div>
      </Page>
    </div>
  )
}
