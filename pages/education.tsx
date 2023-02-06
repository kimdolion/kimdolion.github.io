import Head from 'next/head'
import { Page } from '@/components/Page'
import { EducationSection } from '@/components/EducationSection'

export default function Education() {
  const title = "Kimberly Wilkes' Education"
  const content = "Kimberly Wilkes' educational history; formal and informal."
  const keywords = "Education, Software Engineer, Frontend Developer, Portfolio, Resume"
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
          <EducationSection extraInfo />
        </div>
      </Page>
    </div>
  )
}
