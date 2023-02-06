import Head from 'next/head'
import { Page } from '@/components/Page'
import { ExperienceSection } from '@/components/ExperienceSection'
import { TableOfContents } from '@/components/TableOfContents'

export default function Experience() {
  const title = "Kimberly Wilkes' Work Experience"
  const content = "Kimberly Wilkes' work experiences as a software engineer and teacher."
  const keywords = "Work experience, Software Engineer, Frontend Developer, Portfolio, Resume"
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={title} />
        <meta property="title" content={title} />
        <meta property="og:description" content={content} />
        <meta property="description" content={content} />
        <meta property='og:keywords' content={keywords} />
        <meta property='keywords' content={keywords} />
      </Head>

      <Page>
        <div className='toc-layout'>
          <TableOfContents headingDepth={4} />
          <ExperienceSection extraInfo />
        </div>
      </Page>
    </div>
  )
}
