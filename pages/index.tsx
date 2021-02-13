import React from 'react';
import Head from 'next/head'

import { getAllPostData } from '../api/posts';
import styles from '../styles/Home.module.css'

type Post = {
  title: string,
  description: string,
  date: string,
  slug: string,
};

type Props = {
  posts: Post[],
};

const Post = ({ post: { slug, title, date, description } }: { post: Post }) => (
  <div key={slug} className={styles.post}>
    <h3>
      <a href={slug}>{title}</a>
    </h3>
    <small>{date}</small>
    <p>{description}</p>
  </div>
);

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
          <p>Personal blog by Morgan McCauley</p>
        </p>

        {posts.map((post) => <Post post={post} />)}
      </main>
    </div>
  )
};

export const getStaticProps = async () => ({
  props: {
    posts: getAllPostData(),
  },
});

export default Home;
