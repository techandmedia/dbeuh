import { useState } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ConfigProvider } from 'antd';

// Styling
// Default antd css
// import 'antd/dist/antd.min.css';
// If you want to customize color theme
import 'antd/dist/antd.variable.min.css';

// Local Components
import { Layout } from '../components/layout';

function CustomApp({ Component, pageProps }: AppProps) {
  const [color, setColor] = useState({
    primaryColor: '#1890ff',
    errorColor: '#ff4d4f',
    warningColor: '#faad14',
    successColor: '#52c41a',
    infoColor: '#1890ff',
  });

  function onColorChange(nextColor) {
    const mergedNextColor = {
      ...color,
      ...nextColor,
    };
    setColor(mergedNextColor);
    ConfigProvider.config({
      theme: mergedNextColor,
    });
  }

  return (
    <Layout>
      <Head>
        <title>Welcome to next-antd-example!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}

export default CustomApp;
