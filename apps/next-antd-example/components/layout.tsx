import { CSSProperties, useState } from 'react';
import { ConfigProvider } from 'antd';

// Shared Antd-Components
import { Breadcrumb, Content, Header, Layout, Sider } from '@dbeuh/antd';

export interface ILayout {
  children: React.ReactNode;
}

function NewLayout({ children }: ILayout) {
  const [color, setColor] = useState({
    primaryColor: '#1890ff',
    errorColor: '#ff4d4f',
    warningColor: '#faad14',
    successColor: '#52c41a',
    infoColor: '#1890ff',
  });

  function onColorChange(nextColor: CSSProperties) {
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
      <Header />
      <Layout>
        <Sider />
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb />
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              backgroundColor: '#fff',
              borderRadius: 4,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export { NewLayout as Layout };
