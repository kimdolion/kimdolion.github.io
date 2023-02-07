import Head from 'next/head'
import { Page } from '@/components/Page'
import { EducationSection } from '@/components/EducationSection'

export default function Education() {
  const title = "Kimberly Wilkes' Education"
  const content = "Kimberly Wilkes' educational history; formal and informal from Amherst College to General Assembly's software engineering bootcamp."
  const keywords = "Education, Software Engineer, Frontend Developer, Portfolio, Resume, Coding Bootcamp, college"
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
        <EducationSection extraInfo />
      </Page>
    </div>
  )
}
