import Head from 'next/head'
import { Page } from '@/components/Page'
import { ProjectsSection } from '@/components/ProjectsSection'
import { TableOfContents } from '@/components/TableOfContents'

export default function Projects() {
  const title = "Projects and Technology"
  const content = "Kimberly Wilkes Software Engineer portfolio: projects and technology skills as a frontend engineer."
  const keywords = "React, React Native, TypeScript, JavaScript, NextJS, portfolio"
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
        <div className="toc-layout">
          <TableOfContents headingDepth={2} />
          <ProjectsSection extraInfo />
        </div>
      </Page>
    </div>
  )
}
