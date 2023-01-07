import { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/layout';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default CustomApp;
