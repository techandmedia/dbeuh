import { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/layout';

export default function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to cari-dapat!</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
