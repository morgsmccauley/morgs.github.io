import React from 'react';
import Head from 'next/head'

import styles from '../../styles/Home.module.css'
import Header from '../header';

const Page: React.FC<{}> = ({ children }) => (
  <div className={styles.container}>
    <Head>
      <title>morgs.dev</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <main className={styles.main}>
      {children}
    </main>
  </div>
);

export default Page;
