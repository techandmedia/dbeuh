/* eslint-disable jsx-a11y/anchor-is-valid */
import { CSSProperties } from 'react';
import Link from 'next/link';
import { Icons, IconType } from '@wsh4and/antd';

/* eslint-disable-next-line */
export interface INavLink {
  href: string;
  title: string;
  iconType: IconType;
  iconStyle?: CSSProperties;
  collapsed?: boolean;
}

export function NavLink(props: INavLink) {
  return (
    <Link href={props.href}>
      <a>
        <Icons type={props.iconType} style={props.iconStyle} />
        {!props.collapsed && <span style={{ textTransform: 'capitalize' }}>{props.title}</span>}
      </a>
    </Link>
  );
}
