import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js完全に理解した</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <button className={styles.rikai_button}>理解</button>
        <div className={styles.rikai}>
          Next.js完全に理解した！
        </div>
      </main>
    </div>
  )
}
