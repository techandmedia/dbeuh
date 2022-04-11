import { CSSProperties } from 'react';
import { Menu, MenuItemProps, MenuProps } from 'antd';
import { Icons, IconType } from '../icons/icons';

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
      {props.submenus.map((m: IMenuItem) => (
        <MenuItem {...m} />
      ))}
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

export { NewMenu as Menu };
