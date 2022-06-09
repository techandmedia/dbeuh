import { Col } from 'antd';
import { CSSProperties } from 'react';

export interface IResponsiveContainer {
  colW?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    xxl?: number;
  };
  children: React.ReactNode;
  style?: CSSProperties;
}

/**
 * Responsive Container as long this component is placed inside a Row Component
 */
const defaultWidth = {
  xs: 24,
  sm: 24,
  md: 10,
  lg: 9,
  xl: 8,
  xxl: 6,
};

export function ResponsiveContainer({
  colW = defaultWidth,
  children,
  ...restProps
}: IResponsiveContainer) {
  return (
    <Col
      xs={colW.xs}
      sm={colW.sm}
      md={colW.md}
      lg={colW.lg}
      xl={colW.xl}
      xxl={colW.xxl}
      {...restProps}
    >
      {children}
    </Col>
  );
}
