/* eslint-disable @typescript-eslint/no-empty-interface */
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu, SiderProps } from 'antd';

const { SubMenu } = Menu;
const { Sider } = Layout;

export interface ISider extends SiderProps {
  children: React.ReactNode;
}

function NewSider(props: ISider) {
  console.log(props);
  return (
    <Sider {...props} width={200} className="site-layout-background">
      {/* {props.children} */}
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="vertical">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          Option 1
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          Option 2
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="User">
          <Menu.Item key="3">Tom</Menu.Item>
          <Menu.Item key="4">Bill</Menu.Item>
          <Menu.Item key="5">Alex</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
          <Menu.Item key="6">Team 1</Menu.Item>
          <Menu.Item key="8">Team 2</Menu.Item>
        </SubMenu>
        <Menu.Item key="9" icon={<FileOutlined />}>
          Files
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export { NewSider as Sider };
