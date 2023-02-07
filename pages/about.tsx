import Head from 'next/head'
import { Page } from '@/components/Page'
import { AboutSection } from '@/components/AboutSection'

export default function About() {
  const title = "About Kimberly Wilkes"
  const content = "Kimberly Wilkes is a software engineer and former educator."
  const keywords = "Software Engineer, Frontend Developer, Portfolio, Resume, Software Engineer portfolio, About Kimberly Wilkes"
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="title" content={title} />
        <meta property="og:description" content={content} />
        <meta property="description" content={content} />
        <meta property='og:keywords' content={keywords} />
        <meta property='keywords' content={keywords} />
      </Head>

      <Page>
        <AboutSection extraInfo />
      </Page>
    </div>
  )
}
