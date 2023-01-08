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
      setStyle(prev => ({
        ...prev,
        innerLayoutStyle: {
          ...prev.innerLayoutStyle,
          padding: param.alignment === 'left' ? '16px 12px' : '24px 64px',
        },
      }));
    } else if (screens.xl && !screens.xxl) {
      setStyle(prev => ({
        ...prev,
        innerLayoutStyle: {
          ...prev.innerLayoutStyle,
          padding: param.alignment === 'left' ? '16px 12px' : '24px 48px',
        },
      }));
    } else if (screens.lg && !screens.xl) {
      setStyle(prev => ({
        ...prev,
        innerLayoutStyle: {
          ...prev.innerLayoutStyle,
          padding: param.alignment === 'left' ? '16px 12px' : '24px 32px',
        },
      }));
    } else if (screens.md && !screens.lg) {
      setStyle(prev => ({
        ...prev,
        innerLayoutStyle: {
          ...prev.innerLayoutStyle,
          padding: param.alignment === 'left' ? '16px 12px' : '20px 32px',
        },
      }));
    } else if (screens.sm && !screens.md) {
      setStyle(prev => ({
        ...prev,
        innerLayoutStyle: {
          ...prev.innerLayoutStyle,
          padding: param.alignment === 'left' ? '16px 12px' : '16px',
        },
      }));
    } else {
      setStyle(prev => ({
        ...prev,
        innerLayoutStyle: { ...prev.innerLayoutStyle, padding: '12px' },
      }));
    }

    if (screens.xs && !screens.md) {
      setStyle(prev => ({
        ...prev,
        mobile: true,
        collapsed: true,
        outerLayoutStyle: { ...prev.outerLayoutStyle, marginLeft: 0 },
      }));
    } else {
      setStyle(prev => ({
        ...prev,
        mobile: false,
        collapsed: false,
        outerLayoutStyle: { ...prev.outerLayoutStyle, marginLeft: 24 },
      }));
    }
  }, [param.alignment, screens]);

  return { style, setStyle };
}

export function ResponsiveLayout(props: IResponsiveLayoutProps) {
  const { rootLayoutStyle, innerLayoutStyle, outerLayoutStyle, contentStyle } = props;
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
