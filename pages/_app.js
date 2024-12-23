// pages/_app.js
import React from 'react';
import Layout from '../components/Layout';
import '../styles/globals.css'; // 必要に応じてグローバルCSSを適用

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
