import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';

import Page from '../components/page';
import { getPostSlugs, getPostDataBySlug } from '../api/posts';
import styles from '../styles/Home.module.css'

type Props = {
  title: string,
  description: string,
  date: string,
  html: string,
}

const Post: React.FC<Props> = ({ title, html, date, description }) => (
  <Page>
    <h1 className={styles.title}>{title}</h1>
    <p>{description}</p>
    <p>{date}</p>
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </Page>
);

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { post } = params;

  if (typeof post !== 'string') {
    return {
      notFound: true,
    };
  }

  return {
    props: getPostDataBySlug(post),
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getPostSlugs().map((slug) => ({
      params: { post: slug }
    })),
    fallback: false,
  }
};

export default Post;
