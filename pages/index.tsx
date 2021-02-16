import React from 'react';
import Head from 'next/head'

import { getAllPostData } from '../api/posts';
import styles from '../styles/Home.module.css'
import Page from '../components/page';

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
  <div className={styles.post}>
    <h3>
      <a href={slug}>{title}</a>
    </h3>
    <small>{date}</small>
    <p>{description}</p>
  </div>
);

const Home: React.FC<Props> = ({ posts }) => {
  return (
    <Page>
      <p className={styles.description}>
        Personal blog by Morgan McCauley<br />
        Mostly GraphQL & JavaScript
      </p>
      {posts.map((post) => <Post key={post.slug} post={post} />)}
    </Page>
  )
};

export const getStaticProps = async () => ({
  props: {
    posts: getAllPostData(),
  },
});

export default Home;
