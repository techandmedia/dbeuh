import { CSSProperties } from 'react';
import { Layout, Menu, MenuTheme } from 'antd';
import { MenuMode } from 'rc-menu/lib/interface';
import { IMenuProps } from '../menu-link/menu-link';

const { Sider } = Layout;

/* eslint-disable-next-line */
export interface MenuSiderProps {
  styleMenu?: CSSProperties;
  theme?: MenuTheme;
  mode?: MenuMode;
  menus: IMenuProps[];
  defaultSelectedKeys?: string[];
  defaultOpenKeys?: string[];
  collapsed?: boolean;
  collapsedWidth?: string | number;
  width?: string | number;
}

export function MenuSider(props: MenuSiderProps) {
  return (
    <Sider
      width={props.width || 200}
      collapsed={props.collapsed}
      collapsedWidth={props.collapsedWidth || 0}
    >
      <Menu
        theme={props.theme || 'light'}
        mode={props.mode || 'inline'}
        defaultSelectedKeys={props.defaultSelectedKeys}
        items={props.menus}
        style={props.styleMenu}
      />
    </Sider>
  );
}

export default MenuSider;
