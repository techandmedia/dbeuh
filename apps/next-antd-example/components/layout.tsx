import { CSSProperties, useState } from 'react';
import { ConfigProvider, Typography } from 'antd';

// Shared Antd-Components
import { Breadcrumb, Content, Header, Layout, Menu, Sider } from '@wsh4and/antd';
import { headerMenus, siderMenus } from './menu';

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
  const [collapsed, setCollapsed] = useState(false);
  const menuHeader = headerMenus('user', signOut);
  const menuSider = siderMenus('user', signOut, collapsed);

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

  function signOut() {
    console.log('col');
  }

  function onCollapse(col) {
    console.log(col);
    setCollapsed(col);
  }

  const menuStyle: CSSProperties = {
    backgroundColor: '#fff',
    borderTopRightRadius: '20px',
    borderBottomRightRadius: '20px',
  };

  return (
    <Layout>
      {/* <Header> */}
      <Menu
        menus={menuHeader}
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={['dua']}
        style={{ marginBottom: 5 }}
      />
      {/* </Header> */}
      {/* style={{ marginBottom: 300 }} */}
      <Layout>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} style={{ ...menuStyle }}>
          {/* Put logo here */}
          <h3>H3 biasa</h3>
          <Typography.Title level={3}>LOGO 3</Typography.Title>
          <div className="logo">
            <Typography.Title level={4}>LOGO</Typography.Title>
          </div>
          <Menu
            menus={menuSider}
            // theme="light"
            mode="inline"
            defaultSelectedKeys={['dua']}
            defaultOpenKeys={['enam-a21']}
            style={{ ...menuStyle, height: '100%' }}
          />
        </Sider>
        <Layout style={{ padding: '0 24px 24px', minHeight: '95vh' }}>
          {/* <Breadcrumb /> */}
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: '100%',
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
