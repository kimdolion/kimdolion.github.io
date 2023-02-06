import Head from 'next/head'
import { Page } from '@/components/Page'
import { EducationSection } from '@/components/EducationSection'
import { ExperienceSection } from '@/components/ExperienceSection'
import { ProjectsSection } from '@/components/ProjectsSection'
import { AboutSection } from '@/components/AboutSection'
import { TableOfContents } from '@/components/TableOfContents'
import { Divider } from '@/components/Divider'

export default function Home() {
  const title = "Kimberly Wilkes' Software Engineer Portfolio"
  const content = "Kimberly Wilkes is a software engineer and former educator."
  const keywords = "Software Engineer, Frontend Developer, Portfolio, Resume"
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
          <TableOfContents />
          <div style={{ margin: '2rem 0'}}>
            <AboutSection />
            <div style={{margin: '2rem 0'}}><Divider /></div>
            <ExperienceSection />
            <ProjectsSection />
            <div style={{margin: '2rem 0'}}><Divider /></div>
            <EducationSection />
          </div>
        </div>
      </Page>
    </div>
  )
}
