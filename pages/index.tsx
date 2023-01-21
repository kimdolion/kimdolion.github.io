import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Page } from '../components/Page'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kimberly Wilkes' Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Page title="Welcome!">
        <section>
          <h2>Welcome</h2>
          <p>

          </p>
        </section>
        <section>
          <h2>About Me</h2>
          <p>

          </p>
        </section>
        <section>
          <h2>Most Recent Work Experience</h2>
          <p>

          </p>
        </section>
        <section>
          <h2>Latest Tech</h2>
          <p>

          </p>
        </section>
        <section>
          <h2>Education</h2>
          <div>
            <h3>Bunker Hill Community College</h3>
            <p>Computer Science Coursework</p>
          </div>
          <div>
            <h3>University of Massachusetts Boston</h3>
            <p>Elementary Education</p>
          </div>
          <div>
            <h3>Amherst College</h3>
            <p>Black Studies and Psychology</p>
          </div>
        </section>
      </Page>
    </div>
  )
}
