import { CSSProperties } from 'react';
import { Layout, Menu, MenuTheme } from 'antd';
import { MenuMode } from 'rc-menu/lib/interface';
import { IMenuProps } from '../menu-link/menu-link';

const { Header } = Layout;

export interface MenuHeaderProps {
  style?: CSSProperties;
  theme?: MenuTheme;
  mode?: MenuMode;
  menus: IMenuProps[];
  defaultSelectedKeys?: string[];
}

export function MenuHeader(props: MenuHeaderProps) {
  return (
    <Header
      style={{
        paddingInline: '0px',
        color: 'rgba(0, 0, 0, 0.88)',
        ...props.style,
      }}
    >
      <Menu
        theme={props.theme || 'light'}
        mode={props.mode || 'horizontal'}
        defaultSelectedKeys={props.defaultSelectedKeys}
        items={props.menus}
      />
    </Header>
  );
}

export default MenuHeader;
