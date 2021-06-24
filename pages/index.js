import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SF Video Technology Meetup</title>
        <meta
          name="description"
          content="A meet up in San Francisco for video nerds to...nerd."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <span className={styles.logo}>
          <Image src="/logo.svg" alt="SF Video Logo" width={634} height={115} />
        </span>
        <h1 className={styles.title}>SF Video Technology</h1>
        <p className={styles.description}>
          Find our upcoming events on{' '}
          <a href="https://www.meetup.com/SF-Video-Technology/">meetup.com</a>.
        </p>
      </main>

      <footer className={styles.footer}>
        Organized by{' '}
        <a href="https://twitter.com/matt_mcclure">@matt_mcclure</a> and friends. Proudly part
        of the <a href="https://demuxed.com/meetups">Demuxed squad</a>.
      </footer>
    </div>
  );
}
