import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
// import 'antd/dist/antd.css';
// import 'antd/dist/antd.min.css';
// Use this css to change color
import 'antd/dist/antd.variable.min.css';
import MainLayout from '../components/layout';
import { Button, ConfigProvider } from 'antd';
import { useEffect, useState } from 'react';

const sikumisMainColor = '#327136';
const sikumisSecondaryColor = '#FB6702';

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

  // useEffect(() => {
  //   onColorChange(sikumisMainColor);
  // }, []);

  return (
    <MainLayout>
      <Head>
        <title>Welcome to next-sample!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} color={color} onColorChange={onColorChange} />
      </main>
    </MainLayout>
  );
}

export default CustomApp;
