import { Layout, Menu, MenuTheme } from 'antd';
import { MenuMode } from 'rc-menu/lib/interface';
import { CSSProperties } from 'react';
import { IMenuProps } from '../menu-link/menu-link';

const { Header } = Layout;

interface MenuHeaderProps {
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
      TES
      {/* <Menu
        theme={props.theme || 'light'}
        mode={props.mode || 'horizontal'}
        defaultSelectedKeys={props.defaultSelectedKeys}
        items={props.menus}
      /> */}
    </Header>
  );
}
