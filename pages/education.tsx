import Head from 'next/head'
import { Page } from '@/components/Page'
import { EducationSection } from '@/components/EducationSection'
import { TableOfContents } from '@/components/TableOfContents'

export default function Education() {
  return (
    <div>
      <Head>
        <title>Kimberly Wilkes' Education</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Page>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <EducationSection extraInfo />
        </div>
      </Page>
    </div>
  )
}
