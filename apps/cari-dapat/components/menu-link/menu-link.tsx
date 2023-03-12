/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';

/* eslint-disable-next-line */
export interface MenuLinkProps {
  key: string;
  label?: string;
  icon?: React.ReactNode;
}

export interface IMenuProps {
  key: string;
  label?: string;
  icon?: React.ReactNode;
  children?: IMenuProps[];
}

// TODO - ERROR
// Error: Failed prop type: The prop `href` expects a `string` or `object` in `<Link>`, but got `undefined` instead.
export function MenuLink(props: MenuLinkProps) {
  return (
    <Link href={props.key}>
      <a>
        {props.icon} {props.label}
      </a>
    </Link>
  );
}

export function renderMenuItem(item: IMenuProps) {
  return {
    key: item.label + item.key,
    // icon: <MenuLink key={item.key} label={item.label} icon={item.icon} />,
    icon: (
      <Link href={item.key}>
        <a>
          {item.icon} {item.label}
        </a>
      </Link>
    ),
  };
}

export function renderMenuList(items: IMenuProps[]) {
  const menus: IMenuProps[] = items.map(item => {
    if (item.children) {
      const renderParent = renderMenuItem(item);
      const renderChild = renderMenuList(item.children);
      return {
        ...renderParent,
        children: renderChild,
      };
    }

    return renderMenuItem(item);
  });

  return menus;
}
