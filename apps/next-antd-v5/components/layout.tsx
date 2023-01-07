import React, { CSSProperties, useEffect, useState } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from '@wsh4and/antd-v5';
import { Breadcrumb, Layout, Menu, theme, ConfigProvider, Grid } from '@wsh4and/antd-v5';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import 'libs/antd-v5/node_modules/antd/dist/reset.css';

const { Header, Content, Footer, Sider } = Layout;
const { useBreakpoint } = Grid;

const items1: MenuProps['items'] = ['1', '2', '3'].map(key => ({
  key,
  label: `nav ${key}`,
}));

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,

      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  }
);

interface IMainLayout {
  header?: React.ReactNode;
  breadcrumb?: React.ReactNode;
  children: React.ReactNode;
  sider?: React.ReactNode;
  footer?: React.ReactNode;
  contentStyle?: CSSProperties;
  layoutStyle?: CSSProperties;
}

export function MainHeader() {
  return (
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
    </Header>
  );
}

export function MainBreadCrumb() {
  return (
    <Breadcrumb style={{ margin: '0 0', border: '2px solid red' }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>List</Breadcrumb.Item>
      <Breadcrumb.Item>App</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export function MainSider(props) {
  return (
    <Sider
      collapsedWidth="0"
      style={{ background: props.background || 'wheat' }}
      width={200}
      collapsed={props.collapsed}
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', backgroundColor: props.background || 'wheat' }}
        items={items2}
      />
    </Sider>
  );
}

export function MainFooter() {
  return (
    <Footer style={{ textAlign: 'center', backgroundColor: 'white' }}>
      Ant Design ©2018 Created by Ant UED
    </Footer>
  );
}

function useResponsive() {
  const screens = useBreakpoint();

  let layoutStyle: CSSProperties = { marginLeft: 24, border: '2px solid red' };
  let contentStyle: CSSProperties = {};
  if (screens.xxl) {
    contentStyle = { ...contentStyle, padding: '24px 64px' };
  } else if (screens.xl && !screens.xxl) {
    contentStyle = { ...contentStyle, padding: '24px 48px' };
  } else if (screens.lg && !screens.xl) {
    contentStyle = { ...contentStyle, padding: '24px 32px' };
  } else if (screens.md && !screens.lg) {
    contentStyle = { ...contentStyle, padding: '24px 32px' };
  } else if (screens.sm && !screens.md) {
    contentStyle = { ...contentStyle, padding: '24px' };
  } else {
    contentStyle = { ...contentStyle, padding: '12px' };
  }

  let collapsed = false;
  if (screens.xs && !screens.md) {
    collapsed = true;
    layoutStyle = { ...layoutStyle, marginLeft: 0 };
  } else {
    collapsed = false;
    layoutStyle = { ...layoutStyle, marginLeft: 24 };
  }

  return { collapsed, contentStyle, layoutStyle };
}

export default function AppLayout({ children }) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { collapsed, contentStyle, layoutStyle } = useResponsive();

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#FF4500',
        },
      }}
    >
      <MainLayout
        header={<MainHeader />}
        breadcrumb={<MainBreadCrumb />}
        sider={<MainSider collapsed={collapsed} />}
        footer={<MainFooter />}
        contentStyle={contentStyle}
        layoutStyle={layoutStyle}
      >
        {children}
      </MainLayout>
    </ConfigProvider>
  );
}

function MainLayout(props: IMainLayout) {
  const { header, breadcrumb, children, sider, footer, contentStyle, layoutStyle } = props;
  return (
    <Layout style={{ height: '100vh', backgroundColor: 'white' }}>
      {sider}
      <Layout style={layoutStyle}>
        {header}
        <Content style={contentStyle}>
          {breadcrumb}
          {children}
        </Content>
        {footer}
      </Layout>
    </Layout>
  );
}
