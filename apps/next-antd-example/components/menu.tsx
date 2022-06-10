/* eslint-disable indent */
import { ItemType } from 'antd/lib/menu/hooks/useItems';

// Local Libraries
import { defaultPrivateMenu, defaultPublicMenu } from './menu/default-menu';
import { MailOutlined } from '@ant-design/icons';

export function headerMenus(user: any, signOut: () => void) {
  function logout() {
    signOut();
  }

  const publicAuth: ItemType[] = [
    {
      key: '/profile',
      label: 'Profile',
      icon: <MailOutlined />,
      // submenuicon: 'user',
      // component: <span>Profile - {user?.username || 'Guest'}</span>,
      // submenus: user
      //   ? [
      //       {
      //         key: 'logout',
      //         component: (
      //           <Button type="text" onClick={logout} icon={<Icons type="logout" />}>
      //             Logout
      //           </Button>
      //         ),
      //       },
      //     ]
      //   : [
      //       {
      //         key: 'auth',
      //         component: <NavLink href="/auth" title="auth" iconType="book" />,
      //       },
      //     ],
    },
  ];

  const menus: ItemType[] = [];
  // ? remapNextLinkMenu(defaultPublicMenu, false)
  // : remapNextLinkMenu(defaultPublicMenu, false);

  // const newMenus: ItemType[] = [...menus, ...publicAuth];
  const newMenus: ItemType[] = [...menus, ...defaultPublicMenu];
  return newMenus;
}

export function siderMenus(user, signOut: () => void, collapsed: boolean) {
  function logout() {
    signOut();
  }

  // const privateAuth: ItemType[] = [
  //   {
  //     key: 'profile',
  //     submenuicon: 'user',
  //     component: <span>Profile - {user?.username || 'Guest'}</span>,
  //     submenus: user
  //       ? [
  //           {
  //             key: 'logout',
  //             component: (
  //               <Button type="text" onClick={logout} icon={<Icons type="logout" />}>
  //                 Logout
  //               </Button>
  //             ),
  //           },
  //         ]
  //       : [
  //           {
  //             key: 'auth',
  //             component: <NavLink href="/auth" title="auth" iconType="book" />,
  //           },
  //         ],
  //   },
  // ];

  // const menus: ItemType[] = user
  //   ? remapNextLinkMenu(defaultPrivateMenu, collapsed)
  //   : remapNextLinkMenu(defaultPrivateMenu, collapsed);

  const newMenus: ItemType[] = [
    ...defaultPublicMenu,
    // ...privateAuth
  ];
  return newMenus;
}
