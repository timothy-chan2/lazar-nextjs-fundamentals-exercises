import Head from 'next/head';
import styles from '../styles/Home.module.css';

import Link from 'next/link'
import Image from 'next/image'

import photo from '../public/lazar.png'

import Button from '../src/components/button/button';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fundamental Next.js</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="og:title" content="Completing Lazar's 14 fundamental Next.js exercises" key="title" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Link href="/about">About</Link>
        <div style={{ display: 'flex' }}>
          <Button />
        </div>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        {/* Optimized static image */}
        <Image src={photo} alt="Lazar Nikolov" priority />

        <p className={styles.description}>
          Get started by editing <code>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>
    </div>
  );
}
