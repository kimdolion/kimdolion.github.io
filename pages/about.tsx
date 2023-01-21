import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Page } from '../components/Page'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Kimberly Wilkes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Page title="About Me">
        I'm awesome!
      </Page>
    </div>
  )
}
