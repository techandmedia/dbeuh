import { MenuSider, renderMenuList } from '@wsh4and/antd';
import { IMainResponsive, menu1 } from './layout';

export function MainSider(props: IMainResponsive) {
  const menuSider = renderMenuList(menu1);
  return (
    <MenuSider
      collapsed={props.style.collapsed}
      menus={menuSider}
      styleMenu={{
        height: '100%',
        // backgroundColor: 'wheat',
      }}
      defaultSelectedKeys={['/']}
      defaultOpenKeys={['Nested']}
    />
  );
}
