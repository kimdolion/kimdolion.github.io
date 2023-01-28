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
        <div className="toc-layout" style={{display: 'flex', justifyContent: 'center', paddingBottom: '5rem'}}>
          <TableOfContents />
          <div style={{display: 'flex', flexDirection: 'column', gap: 20, }}>
            <AboutSection />
            <div style={{ borderBottom: '1px solid white', width: '100%'}}/>
            <ExperienceSection />
            <div style={{ borderBottom: '1px solid white', width: '100%'}}/>
            <ProjectsSection />
            <div style={{ borderBottom: '1px solid white', width: '100%'}}/>
            <EducationSection />
          </div>
        </div>
      </Page>
    </div>
  )
}
