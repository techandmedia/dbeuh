import React from 'react';
import {
  LaptopOutlined,
  MenuOutlined,
  NotificationOutlined,
  RetweetOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Button, Col, IUseResponsive, MenuProps, Row } from '@wsh4and/antd-v5';
import { Breadcrumb, Menu, Layout, theme, ConfigProvider } from '@wsh4and/antd-v5';
import { ResponsiveLayout, useResponsive } from '@wsh4and/antd-v5';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import 'libs/antd-v5/node_modules/antd/dist/reset.css';

const { Header, Footer, Sider } = Layout;

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

interface IMainResponsive {
  style?: IUseResponsive;
  setStyle?: React.Dispatch<React.SetStateAction<IUseResponsive>>;
}

export function MainHeader(props: IMainResponsive) {
  const themes = theme.useToken();
  const { token } = themes;
  // console.log('token', token);

  const commonStyle = {
    lineHeight: '64px',
  };
  const buttonColStyle = {
    ...commonStyle,
    paddingLeft: 12,
  };

  return (
    <Row
      justify="space-between"
      style={{ backgroundColor: props.style.theme === 'light' ? '#ffffff' : '#001529' }}
    >
      <Col xs={12} md={2} style={buttonColStyle}>
        <Button
          icon={<MenuOutlined style={{ color: token.colorPrimary }} />}
          onClick={() => {
            props.setStyle(prev => ({
              ...prev,
              collapsed: prev.collapsed ? false : true,
              outerLayoutStyle: { ...prev.outerLayoutStyle, marginLeft: prev.collapsed ? 24 : 0 },
            }));
          }}
        ></Button>
      </Col>
      <Col xs={2} md={20}>
        <Header
          className="header"
          style={{
            ...commonStyle,
            paddingInline: '0px',
            color: 'rgba(0, 0, 0, 0.88)',
          }}
        >
          <Menu
            theme={props.style.theme}
            mode="horizontal"
            defaultSelectedKeys={['2']}
            items={items1}
          />
        </Header>
      </Col>
      <Col span={2} style={{ ...commonStyle, marginRight: props.style.mobile ? 24 : 0 }}>
        <Button
          icon={<RetweetOutlined style={{ color: token.colorPrimary }} />}
          onClick={() => {
            props.setStyle(prev => ({
              ...prev,
              theme: prev.theme === 'light' ? 'dark' : 'light',
            }));
          }}
        ></Button>
      </Col>
    </Row>
  );
}

export function MainBreadCrumb(props: IMainResponsive) {
  return (
    <Breadcrumb
      style={{
        marginBottom: 8,
        border: '2px solid red',
      }}
    >
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>List</Breadcrumb.Item>
      <Breadcrumb.Item>App</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export function MainSider(props: IMainResponsive) {
  return (
    <Sider
      collapsedWidth="0"
      //   style={{ background: props.background || 'wheat' }}
      width={200}
      collapsed={props.style.collapsed}
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        theme={props.style.theme}
        style={{
          height: '100%',
          // backgroundColor: props.background || 'wheat'
        }}
        items={items2}
      />
    </Sider>
  );
}

export function MainFooter(props: IMainResponsive) {
  return (
    <Footer
      style={{
        textAlign: 'center',
        backgroundColor: 'white',
        margin: 0,
        padding: props.style.mobile ? 12 : 18,
        fontSize: props.style.mobile ? 12 : 14,
      }}
    >
      Ant Design ©2018 Created by Ant UED
    </Footer>
  );
}

type ThemeData = {
  borderRadius: number;
  colorPrimary: string;
};

const defaultTheme: ThemeData = {
  borderRadius: 6,
  colorPrimary: '#FF4500',
};

export default function AppLayout({ children }) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { style, setStyle } = useResponsive({ alignment: 'left' });
  const [themes, setThemes] = React.useState<ThemeData>(defaultTheme);

  return (
    <ConfigProvider
      theme={{
        token: { ...themes },
      }}
    >
      <ResponsiveLayout
        header={<MainHeader style={style} setStyle={setStyle} />}
        breadcrumb={<MainBreadCrumb style={style} />}
        sider={<MainSider style={style} />}
        footer={<MainFooter style={style} />}
        rootLayoutStyle={style.rootLayoutStyle}
        innerLayoutStyle={style.innerLayoutStyle}
        contentStyle={style.contentStyle}
        outerLayoutStyle={style.outerLayoutStyle}
      >
        {children}
      </ResponsiveLayout>
    </ConfigProvider>
  );
}
