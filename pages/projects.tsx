import Head from 'next/head'
import { Page } from '@/components/Page'
import { ProjectsSection } from '@/components/ProjectsSection'
import { TableOfContents } from '@/components/TableOfContents'

export default function Projects() {
  const title = "Projects and Technology"
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={title} />
        <meta property="title" content={title} />
        <meta property="og:description" content="Kimberly Wilkes Software Engineer portfolio: projects and technology skills." />
        <meta property="description" content="Kimberly Wilkes Software Engineer portfolio: projects and technology skills." />
      </Head>

      <Page>
        <div className="toc-layout">
          <TableOfContents headingDepth={2} />
          <ProjectsSection extraInfo />
        </div>
      </Page>
    </div>
  )
}
