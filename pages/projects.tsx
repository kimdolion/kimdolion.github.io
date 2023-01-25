import Head from 'next/head'
import { Page } from '@/components/Page'
import { ProjectsSection } from '@/components/ProjectsSection'
import { TableOfContents } from '@/components/TableOfContents'

export default function Projects() {
  return (
    <div>
      <Head>
        <title>Kimberly Wilkes' Experience</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Page>
        <div className="toc-layout">
          <TableOfContents />
          <ProjectsSection extraInfo />
        </div>
      </Page>
    </div>
  )
}
