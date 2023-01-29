import Head from 'next/head'
import { Page } from '@/components/Page'
import { EducationSection } from '@/components/EducationSection'
import { ExperienceSection } from '@/components/ExperienceSection'
import { ProjectsSection } from '@/components/ProjectsSection'
import { AboutSection } from '@/components/AboutSection'
import { TableOfContents } from '@/components/TableOfContents'
import { Divider } from '@/components/Divider'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kimberly Wilkes' Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Page>
        <div className="toc-layout">
          <TableOfContents />
          <div style={{display: 'flex', flexDirection: 'column', gap: 20, }}>
            <AboutSection />
            <Divider />
            <ExperienceSection />
            <Divider />
            <ProjectsSection />
            <Divider />
            <EducationSection />
          </div>
        </div>
      </Page>
    </div>
  )
}
