/* eslint-disable jsx-a11y/anchor-is-valid */
import { CSSProperties } from 'react';
import { Icons, IconType } from '../icons/icons';

/* eslint-disable-next-line */
export interface INavLink {
  title: string;
  iconType: IconType;
  iconStyle?: CSSProperties;
  collapsed?: boolean;
}

export function NavLink(props: INavLink) {
  return (
    <a>
      <Icons type={props.iconType} style={props.iconStyle} />
      {!props.collapsed && <span style={{ textTransform: 'capitalize' }}>{props.title}</span>}
    </a>
  );
}
