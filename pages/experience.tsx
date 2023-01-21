import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Page } from '../components/Page'
import { ExperienceSection } from '../components/ExperienceSection'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kimberly Wilkes' Experience</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Page title="Kimberly Wilkes' Experience">
        <p>Such experience, much wow.</p>
        <ExperienceSection />
      </Page>
    </div>
  )
}
