/* eslint-disable @typescript-eslint/ban-ts-comment */
import { AppProps } from 'next/app';
import Layout from '../components/layout';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default CustomApp;
