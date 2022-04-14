/* eslint-disable indent */
import { Button } from 'antd';
import { Icons, IMenuItem, NextLink, remapNextLinkMenu } from '@dbeuh/antd';

// Local Libraries
import { defaultPrivateMenu, defaultPublicMenu } from './menu/default-menu';

export function headerMenus(user: any, signOut: () => void) {
  function logout() {
    signOut();
  }

  const publicAuth: IMenuItem[] = [
    {
      key: 'profile',
      submenuicon: 'user',
      component: <span>Profile - {user?.username || 'Guest'}</span>,
      submenus: user
        ? [
            {
              key: 'logout',
              component: (
                <Button type="text" onClick={logout} icon={<Icons type="logout" />}>
                  Logout
                </Button>
              ),
            },
          ]
        : [
            {
              key: 'auth',
              component: <NextLink href="/auth" title="auth" iconType="book" />,
            },
          ],
    },
  ];

  const menus: IMenuItem[] = user
    ? remapNextLinkMenu(defaultPublicMenu, false)
    : remapNextLinkMenu(defaultPublicMenu, false);

  const newMenus: IMenuItem[] = [...menus, ...publicAuth];
  return newMenus;
}

export function siderMenus(user, signOut: () => void, collapsed: boolean) {
  function logout() {
    signOut();
  }

  const privateAuth: IMenuItem[] = [
    {
      key: 'profile',
      submenuicon: 'user',
      component: <span>Profile - {user?.username || 'Guest'}</span>,
      submenus: user
        ? [
            {
              key: 'logout',
              component: (
                <Button type="text" onClick={logout} icon={<Icons type="logout" />}>
                  Logout
                </Button>
              ),
            },
          ]
        : [
            {
              key: 'auth',
              component: <NextLink href="/auth" title="auth" iconType="book" />,
            },
          ],
    },
  ];

  const menus: IMenuItem[] = user
    ? remapNextLinkMenu(defaultPrivateMenu, collapsed)
    : remapNextLinkMenu(defaultPrivateMenu, collapsed);

  const newMenus: IMenuItem[] = [...menus, ...privateAuth];
  return newMenus;
}
