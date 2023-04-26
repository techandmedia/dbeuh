import React from 'react';
import { Layout, Menu, MenuProps } from 'antd';
import { ItemType } from 'antd/es/breadcrumb/Breadcrumb';
import { CollapseType } from 'antd/es/layout/Sider';

const { Sider } = Layout;

export interface ISideMenuProps {
  breakpoint?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  collapsedWidth?: string | number;
  items?: ItemType[];
  onBreakpoint?: (broken: boolean) => void;
  onCollapse?: (collapsed: boolean, type: CollapseType) => void;
  logo?: React.ReactNode;
  builtInHamburger?: boolean;
  collapsed?: boolean;
  siderWidth?: number;
  siderStyle?: React.CSSProperties;
  menuItems: MenuProps['items'];
  onMenuClick?: (e: unknown) => void;
}

/**
 * Renders a side menu with a logo and a list of items
 * Ant Design provide a default hamburger icon, but you can hide it if you have your own custom one
 * In order to hide the default hamburger icon, you need to pass a trigger value of null
 * @param {builtInHamburger} props - whether to use the built-in hamburger icon or not
 * @param {breakpoint} props - breakpoint for the side menu
 * @param {collapsedWidth} props - width of the side menu when collapsed
 * @param {items} props - list of items to be displayed in the side menu
 * @param {onBreakpoint} props - callback function when the breakpoint is reached
 * @param {onCollapse} props - callback function when the side menu is collapsed
 * @param {logo} props - logo to be displayed in the side menu
 * @returns SideMenu
 */
export function SideMenu(props: ISideMenuProps) {
  return (
    <Sider
      breakpoint={props.breakpoint ?? 'xs'}
      collapsedWidth={props.collapsedWidth ?? '0'}
      onBreakpoint={props.onBreakpoint}
      onCollapse={props.onCollapse}
      trigger={props.builtInHamburger}
      collapsed={props.collapsed}
      width={props.siderWidth ?? 230}
      style={{ height: '100vh', backgroundColor: 'antiquewhite', ...props.siderStyle }}
    >
      {props.logo && props.logo}
      <Menu
        mode="inline"
        theme="light"
        defaultSelectedKeys={['4']}
        items={props.menuItems}
        onClick={props.onMenuClick}
      />
    </Sider>
  );
}
