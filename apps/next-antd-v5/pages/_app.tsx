/* eslint-disable @typescript-eslint/ban-ts-comment */
import { AppProps } from 'next/app';
import Layout from '../components/layout';
import { useEffect, useState } from 'react';
import { deHashPayload } from '@wsh4and/utils';

function CustomApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // @ts-ignore
    // only run this on development?goog
    window.deCryptPayload = deHashPayload;
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default CustomApp;
