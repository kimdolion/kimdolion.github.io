import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Page } from '../components/Page'
import { EducationSection } from '../components/EducationSection'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kimberly Wilkes' Education</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Page title="Kimberly Wilkes' Education">
        <EducationSection extraInfo />
      </Page>
    </div>
  )
}
