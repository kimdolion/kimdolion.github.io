import Head from 'next/head'
import { Page } from '@/components/Page'
import { EducationSection } from '@/components/EducationSection'

export default function Education() {
  return (
    <div>
      <Head>
        <title>Kimberly Wilkes' Education</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Page>
        <div>
          <EducationSection extraInfo />
        </div>
      </Page>
    </div>
  )
}
