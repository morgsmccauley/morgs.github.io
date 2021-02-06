import React from 'react';
import Head from 'next/head'

import { getPostSlugs } from '../api/posts';
import styles from '../styles/Home.module.css'

type Props = {
  posts: string[],
};

const Home: React.FC<Props> = ({ posts }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>morgs.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          morgs.dev
        </h1>

        <p className={styles.description}>
          Personal blog by Morgan McCauley{' '}
          Passionate about GraphQL and JavaScript
        </p>

        {posts.map((post) => (
          <a key={post} href={post}>{post}</a>
        ))}
      </main>
    </div>
  )
};

export const getStaticProps = async () => ({
  props: {
    posts: getPostSlugs(),
  },
});

export default Home;
