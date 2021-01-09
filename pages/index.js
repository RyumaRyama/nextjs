import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Rikai from '../components/rikai'
import RikaiButton from '../components/rikai_button'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js完全に理解した</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Rikai />
      </main>
    </div>
  )
}
