import { AppProps } from 'next/app';
import Head from 'next/head';
import { MainLayout } from '../components/main-layout';
import 'antd/dist/reset.css';
import '../styles/vars.css';
import '../styles/global.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to dbeuh!</title>
      </Head>
      <main>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </main>
    </>
  );
}

export default CustomApp;
