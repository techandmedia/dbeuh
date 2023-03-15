import { useState, useEffect, CSSProperties } from 'react';
import { Layout, Grid } from 'antd';

const { Content } = Layout;
const { useBreakpoint } = Grid;

export interface IResponsiveLayoutProps {
  header?: React.ReactNode;
  breadcrumb?: React.ReactNode;
  children: React.ReactNode;
  sider?: React.ReactNode;
  footer?: React.ReactNode;
  rootLayoutStyle?: CSSProperties;
  outerLayoutStyle?: CSSProperties;
  innerLayoutStyle?: CSSProperties;
  contentStyle?: CSSProperties;
}

export interface IUseResponsive extends IUseTheme {
  mobile: boolean;
  collapsed: boolean;
  rootLayoutStyle: CSSProperties;
  outerLayoutStyle: CSSProperties;
  innerLayoutStyle: CSSProperties;
  contentStyle: CSSProperties;
}

export interface IUseTheme {
  theme?: 'light' | 'dark';
  // TODO: right allignment
  alignment?: 'center' | 'left';
}

/**
 * This hooks mainly design for responsive layout in conjungtion with the layout component itself
 * The default value and how it changes are already tested with multiple use cases so they are definetly works
 * in term of responsivenes.
 * @param theme to change the color theme, normally it's either light or dark
 * @param alignment is where we can 'adjust' the alignment of the content; though it's not perfect.
 * @returns the style which mostly focused on mobile
 */
export function useResponsive(param: IUseTheme) {
  const screens = useBreakpoint();
  const [style, setStyle] = useState<IUseResponsive>({
    mobile: false,
    collapsed: false,
    rootLayoutStyle: {
      height: '100vh',
      backgroundColor: 'white',
    },
    outerLayoutStyle: { marginLeft: 24, border: '2px solid red' },
    innerLayoutStyle: { padding: 24 },
    contentStyle: { overflow: 'scroll', width: '100%' },
    theme: param.theme || 'light',
    alignment: param.alignment || 'center',
  });

  useEffect(() => {
    if (screens.xxl) {
      setStyle((prev) => ({
        ...prev,
        innerLayoutStyle: {
          ...prev.innerLayoutStyle,
          padding: param.alignment === 'left' ? '16px 12px' : '24px 64px',
        },
      }));
    } else if (screens.xl && !screens.xxl) {
      setStyle((prev) => ({
        ...prev,
        innerLayoutStyle: {
          ...prev.innerLayoutStyle,
          padding: param.alignment === 'left' ? '16px 12px' : '24px 48px',
        },
      }));
    } else if (screens.lg && !screens.xl) {
      setStyle((prev) => ({
        ...prev,
        innerLayoutStyle: {
          ...prev.innerLayoutStyle,
          padding: param.alignment === 'left' ? '16px 12px' : '24px 32px',
        },
      }));
    } else if (screens.md && !screens.lg) {
      setStyle((prev) => ({
        ...prev,
        innerLayoutStyle: {
          ...prev.innerLayoutStyle,
          padding: param.alignment === 'left' ? '16px 12px' : '20px 32px',
        },
      }));
    } else if (screens.sm && !screens.md) {
      setStyle((prev) => ({
        ...prev,
        innerLayoutStyle: {
          ...prev.innerLayoutStyle,
          padding: param.alignment === 'left' ? '16px 12px' : '16px',
        },
      }));
    } else {
      setStyle((prev) => ({
        ...prev,
        innerLayoutStyle: { ...prev.innerLayoutStyle, padding: '12px' },
      }));
    }

    if (screens.xs && !screens.md) {
      setStyle((prev) => ({
        ...prev,
        mobile: true,
        collapsed: true,
        outerLayoutStyle: { ...prev.outerLayoutStyle, marginLeft: 0 },
      }));
    } else {
      setStyle((prev) => ({
        ...prev,
        mobile: false,
        collapsed: false,
        outerLayoutStyle: { ...prev.outerLayoutStyle, marginLeft: 24 },
      }));
    }
  }, [param.alignment, screens]);

  return { style, setStyle };
}

/**
 * @param style is an object consist of 4 different styles in 4 parts of the layout.
 * @param rootLayoutStyle is the root style determining the root container. This is the parent container for all layout/elements.
 * Here mostly where you 'reset' the margin or padding to 0. This layout consist of 2 elements and divide by 2 columns for
 * the inner layout and the sider.
 * @param outerLayoutStyle is the layout that wrap the header, the inner layout and the footer
 * @param innerLayoutStyle wraps the breadcrumb menu (if any) and the content
 * @param contentStyle is the container for the main content
 * @returns the main content
 */
export function ResponsiveLayout(props: IResponsiveLayoutProps) {
  const { rootLayoutStyle, innerLayoutStyle, outerLayoutStyle, contentStyle } =
    props;
  const { header, breadcrumb, children, sider, footer } = props;

  return (
    <Layout style={rootLayoutStyle}>
      {sider}
      <Layout style={outerLayoutStyle}>
        {header}
        <Layout style={innerLayoutStyle}>
          {breadcrumb}
          <Content style={contentStyle}>{children}</Content>
        </Layout>
        {footer}
      </Layout>
    </Layout>
  );
}
