import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import NewsList from '../components/NewsList';
import Footer from '../components/Footer';

const IndexPage = () => {
  return (
    <div>
      <Head>
        <title>News App</title>
        <meta name="description" content="A news app built with Next.js" />
      </Head>

      <Header />

      <main>
        {/* <h1>Welcome to the News App</h1> */}
        <NewsList />
      </main>

      <Footer />
    </div>
  );
};

export default IndexPage;

