import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Page } from '../components/Page'
import { ProjectsSection } from '../components/ProjectsSection'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kimberly Wilkes' Experience</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Page title="Kimberly Wilkes' Projects">
        ALL THE TECH!
        <ProjectsSection extraInfo />
      </Page>
    </div>
  )
}
