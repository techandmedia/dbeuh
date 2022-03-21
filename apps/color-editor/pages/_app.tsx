import { useState } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ConfigProvider, Layout } from 'antd';
import 'antd/dist/antd.variable.min.css';
const { Content } = Layout;

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
    <>
      <Head>
        <title>Welcome to color-editor!</title>
      </Head>
      <main className="app">
        <Layout>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: '#fff',
            }}
          >
            <Component {...pageProps} color={color} onColorChange={onColorChange} />
          </Content>
        </Layout>
      </main>
    </>
  );
}

export default CustomApp;
