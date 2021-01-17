import Head from 'next/head'
import styles from '../styles/Home.module.css'

const IndexPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>写代码的陈主任</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </div>
  )
}

export default IndexPage;
