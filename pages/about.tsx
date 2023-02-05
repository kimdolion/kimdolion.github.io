import Head from 'next/head'
import { Page } from '@/components/Page'
import { AboutSection } from '@/components/AboutSection'

export default function About() {
  const title = "About Kimberly Wilkes"
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Software engineer portfolio: about Kimberly Wilkes." key={title} />
      </Head>

      <Page>
        <div className="toc-layout">
          <AboutSection extraInfo />
        </div>
      </Page>
    </div>
  )
}
