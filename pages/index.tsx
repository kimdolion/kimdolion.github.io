import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Page } from '../components/Page'
import { EducationSection } from '../components/EducationSection'
import { ExperienceSection } from '../components/ExperienceSection'
import { ProjectsSection } from '../components/ProjectsSection'
import { AboutSection } from '../components/AboutSection'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kimberly Wilkes' Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Page title="Welcome!">
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
      </Page>
    </div>
  )
}
