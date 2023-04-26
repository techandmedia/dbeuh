import { CSSProperties } from 'react';

const height = '56px';

const commonStyle: CSSProperties = {
  padding: '14px 14px 14px 14px',
  overflow: 'hidden',
  margin: '0px 0px 8px 0px',
  backgroundColor: '#fff',
  boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
  borderRadius: 4,
};
export const childrenContentStyle: CSSProperties = {};
export const layoutStyle: CSSProperties = { marginLeft: '20px' };
export const mainHeaderStyle: CSSProperties = {
  ...commonStyle,
  minHeight: height,
  maxHeight: height,
  // padding: isMobile ? '0px 8px 0px 0px' : '0px 8px 8px 0px',
  // borderBottomLeftRadius: 4,
  // borderTopRightRadius: 0,
  // borderBottomRightRadius: 6,
  // borderRight: '2px solid var(--Akper-Green-Color)',
  // borderBottom: '4px solid var(--Akper-Green-Color)',
  // border: '1px solid red',
};
export const utilitiesStyle: CSSProperties = {
  ...commonStyle,
  textAlign: 'center',
  minHeight: '50px',
  maxHeight: '50px',
};
export const hamburgerStyle: CSSProperties = {};
export const leftChildrenStyle: CSSProperties = {};
export const rightChildrenStyle: CSSProperties = {};
export const leftHeaderContainerStyle: CSSProperties = {};
/**
 * Right container style - Default for mobile
 * @type {CSSProperties}
 */
export const rightHeaderContainerStyle: CSSProperties = { marginRight: '20px' };
