import { useState } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ConfigProvider } from 'antd';

// Styling
// Default antd css
// import 'antd/dist/antd.min.css';
// If you want to customize color theme
import 'antd/dist/antd.variable.min.css';
import '../styling/custom-antd.css';

// Local Components
import { Layout } from '../components/layout';
import { useRouter } from 'next/router';

export interface IColorTheme {
  primaryColor: string;
  errorColor: string;
  warningColor: string;
  successColor: string;
  infoColor: string;
  customColor1?: string;
}

function CustomApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [color, setColor] = useState<IColorTheme>({
    primaryColor: '#1890ff',
    errorColor: '#ff4d4f',
    warningColor: '#faad14',
    successColor: '#52c41a',
    infoColor: '#1890ff',
  });
  const customColor: IColorTheme = {
    // default-color Ant Design
    // Also able to change through CSS file, but less 'real-time'
    // example var > 'var(--ant-primary-color)'
    primaryColor: '#1890ff',
    errorColor: '#ff4d4f',
    warningColor: '#faad14',
    successColor: '#52c41a',
    infoColor: '#1890ff',
    // custom-color
    customColor1: '#327136',
  };

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
    <Layout router={router}>
      <Head>
        <title>Welcome to next-antd-example!</title>
      </Head>
      <main className="app">
        <Component
          {...pageProps}
          color={color}
          customColor={customColor}
          onColorChange={onColorChange}
          router={router}
        />
      </main>
    </Layout>
  );
}

export default CustomApp;
