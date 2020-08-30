import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import {useRouter} from 'next/router'

export default function Home() {

  const Router = useRouter()

  console.log(Router)

  return (
    <div className={styles.container}>
      <Head>
        <title>Devter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="/">Devter</a>
        </h1>
        <nav>
          <Link href='/timeline'><a>Timeline</a></Link>
        </nav>
      </main>
    </div>
  )
}
