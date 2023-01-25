import Head from 'next/head'
import { Page } from '@/components/Page'
import { EducationSection } from '@/components/EducationSection'
import { ExperienceSection } from '@/components/ExperienceSection'
import { ProjectsSection } from '@/components/ProjectsSection'
import { AboutSection } from '@/components/AboutSection'
import { TableOfContents } from '@/components/TableOfContents'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kimberly Wilkes' Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Page>
        <div className="toc-layout">
          <TableOfContents headingDepth={4} />
          <div>
            <AboutSection />
            <hr />
            <ExperienceSection />
            <hr />
            <ProjectsSection />
            <hr />
            <EducationSection />
          </div>
        </div>
      </Page>
    </div>
  )
}
