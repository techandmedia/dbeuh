import { IMainResponsive, menu1 } from './layout';
import { renderMenuList } from './menu-link/menu-link';
import MenuSider from './menu-sider';

export function MainSider(props: IMainResponsive) {
  const menuSider = renderMenuList(menu1);
  return (
    <MenuSider
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
