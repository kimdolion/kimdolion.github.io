import Head from 'next/head'
import { Page } from '../components/Page'
import { ExperienceSection } from '../components/ExperienceSection'
import { TableOfContents } from '../components/TableOfContents'

export default function Experience() {
  return (
    <div>
      <Head>
        <title>Kimberly Wilkes' Experience</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Page title="Kimberly Wilkes' Experience">
        <div style={{display: 'flex'}}>
          <TableOfContents />
          <ExperienceSection extraInfo />
        </div>
      </Page>
    </div>
  )
}
