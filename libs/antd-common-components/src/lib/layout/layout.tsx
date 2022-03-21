import { Layout, Menu, SiderProps } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

/* eslint-disable-next-line */
export interface LayoutProps {
  children: React.ReactNode;
  className?: string | undefined;
}

export interface SideMenuProps extends SiderProps {
  menus?: any[];
}

const { Header, Content, Footer, Sider } = Layout;

function MainLayout(props: LayoutProps) {
  return <Layout className={props.className || ''}>{props.children}</Layout>;
}

function CustomSider(props: SideMenuProps) {
  return (
    <Sider {...props} collapsedWidth={props.collapsedWidth || 0}>
      <div className="logo" />
      <Menu theme="light" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          nav 1
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          nav 2
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          nav 3
        </Menu.Item>
        <Menu.Item key="4" icon={<UserOutlined />}>
          nav 4
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export { Header, Content, Footer, CustomSider as Sider, MainLayout as Layout };
