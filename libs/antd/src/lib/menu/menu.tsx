import { CSSProperties } from 'react';
import { Menu, MenuItemProps, MenuProps } from 'antd';
import { Icons, IconType } from '../icons/icons';
import { INextLink, NextLink } from '../next-link/next-link';

const { SubMenu } = Menu;

export interface IMenuItem extends MenuItemProps {
  key: string;
  icontype?: IconType;
  style?: CSSProperties;
  component?: React.ReactNode;
  submenuicon?: IconType;
  submenus?: IMenuItem[];
  groupmenus?: IGroupMenu[];
}

export interface IGroupMenu {
  key: string | undefined;
  grouptitle: string;
  menus: IMenuItem[];
}

export interface IGroupMenus {
  key: string | undefined;
  eventKey?: string;
  style?: CSSProperties;
  component?: React.ReactNode;
  submenuicon?: IconType;
  groupmenus: IGroupMenu[];
}

export interface ISubMenu {
  key: string;
  eventKey?: string;
  style?: CSSProperties;
  component?: React.ReactNode;
  submenuicon: IconType;
  submenus: IMenuItem[];
}

export interface IMainMenu extends MenuProps {
  menus: IMenuItem[] | ISubMenu[];
}

function NewMenu(props: IMainMenu) {
  return (
    <Menu {...props}>
      {props.menus.map((item: IMenuItem) => {
        if (item.submenus && item.submenuicon) {
          return <SubMenus {...item} submenus={item.submenus} submenuicon={item.submenuicon} />;
        }

        if (item.groupmenus) {
          return <GroupMenus {...item} groupmenus={item.groupmenus} />;
        }

        return <MenuItem {...item} />;
      })}
    </Menu>
  );
}

function MenuItem(props: IMenuItem) {
  if (props.eventKey?.includes('hidden')) return null;

  return (
    <Menu.Item
      {...props}
      style={{ ...props.style, textTransform: 'capitalize' }}
      icon={props.icontype ? <Icons type={props.icontype} /> : null}
    >
      {props.component}
    </Menu.Item>
  );
}

function SubMenus(props: ISubMenu) {
  if (props.eventKey?.includes('hidden')) return null;

  return (
    <SubMenu {...props} title={props.component} icon={<Icons type={props.submenuicon} />}>
      {props.submenus.map((m: IMenuItem) => {
        if (m.submenus && m.submenuicon) {
          return (
            <SubMenu {...m} title={m.component} icon={<Icons type={m.submenuicon} />}>
              {m.submenus.map(sn => (
                <MenuItem {...sn} />
              ))}
            </SubMenu>
          );
        }

        return <MenuItem {...m} />;
      })}
    </SubMenu>
  );
}

function GroupMenus(props: IGroupMenus) {
  if (props.eventKey?.includes('hidden')) return null;

  return (
    <SubMenu {...props} title={props.component} icon={<Icons type={props.submenuicon} />}>
      {props.groupmenus.map(g => {
        if (g.key?.includes('hidden')) return null;

        return (
          <Menu.ItemGroup key={g.key} title={g.grouptitle}>
            {g.menus.map((m: IMenuItem) => (
              <MenuItem {...m} />
            ))}
          </Menu.ItemGroup>
        );
      })}
    </SubMenu>
  );
}

function remapNextLinkMenu(menus: INextLink[], collapsed: boolean): IMenuItem[] {
  const remapMenus: IMenuItem[] = menus.map(m => {
    if (m.submenus) {
      const nestedMenus = m.submenus.map(s => {
        if (s.submenus) {
          const superNestedMenus = s.submenus.map(sn => ({
            key: sn.href,
            component: <NextLink {...sn} collapsed={collapsed} />,
          }));

          return {
            key: s.href,
            submenuicon: s.iconType,
            component: <span>{s.title}</span>,
            submenus: superNestedMenus,
          };
        }

        return {
          key: s.href,
          component: <NextLink {...s} collapsed={collapsed} />,
        };
      });

      return {
        key: m.href,
        submenuicon: m.iconType,
        component: <span>{m.title}</span>,
        submenus: nestedMenus,
      };
    }

    return {
      key: m.href,
      component: <NextLink {...m} collapsed={collapsed} />,
    };
  });

  return remapMenus;
}

export { NewMenu as Menu, remapNextLinkMenu };
