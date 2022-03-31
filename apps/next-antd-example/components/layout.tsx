import { CSSProperties, useState } from 'react';
import { ConfigProvider } from 'antd';

// Shared Antd-Components
import { Breadcrumb, Content, Header, Layout, Menu, Sider } from '@dbeuh/antd';
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
  const menuHeader = headerMenus();
  const menuSider = siderMenus(collapsed);

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

  function onCollapse(col) {
    console.log(col);
    setCollapsed(col);
  }

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
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <Menu
            menus={menuSider}
            theme="light"
            mode="inline"
            defaultSelectedKeys={['dua']}
            defaultOpenKeys={['enam-a21']}
            style={{ height: '100%', borderRight: 0 }}
          />
        </Sider>
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
