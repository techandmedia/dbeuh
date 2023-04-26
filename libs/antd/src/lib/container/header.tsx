import React, { CSSProperties } from 'react';
import { Col, Row } from 'antd';
import { ContentContainer } from './content';

export interface IHeader {
  mainHeaderStyle?: CSSProperties;
  customHamburger?: React.ReactNode;
  childrenStyle?: CSSProperties;
  onHamburgerClick?: () => void;
  hamburgerPosition?: 'left' | 'right';
  layoutType?: 'default' | 'mobile' | 'tablet';
  // Left side of the header
  leftHeaderContainerStyle?: CSSProperties;
  leftHeaderChildren?: React.ReactNode;
  leftChildrenStyle?: CSSProperties;
  // Right side of the header
  rightHeaderContainerStyle?: CSSProperties;
  rightHeaderChildren?: React.ReactNode;
  rightChildrenStyle?: CSSProperties;
}

function defineColStyle(hamburgerPosition: 'left' | 'right') {
  const commonStyle = { xs: 18, sm: 18, md: 20 };
  const oppositeStyle = { xs: 6, sm: 6, md: 4 };

  return {
    colLeftStyle: hamburgerPosition === 'left' ? commonStyle : oppositeStyle,
    colRightStyle: hamburgerPosition === 'right' ? commonStyle : oppositeStyle,
  };
}

interface IHeaderChildren {
  children: React.ReactNode;
  isHamburger?: boolean;
  customHamburger?: React.ReactNode;
  containerStyle?: CSSProperties;
  onHamburgerClick?: () => void;
  childrenContentStyle?: CSSProperties;
  hamburgerPosition: 'left' | 'right' | undefined;
  justify?: 'start' | 'end';
}

function HeaderChildren(props: IHeaderChildren) {
  const { children, isHamburger, onHamburgerClick, justify } = props;
  const { customHamburger, containerStyle, childrenContentStyle, hamburgerPosition } = props;
  const colStyle = defineColStyle(hamburgerPosition as 'left' | 'right');
  const styleKey = justify === 'end' ? 'colRightStyle' : 'colLeftStyle';

  const content = (
    <Col span={isHamburger ? 20 : 24} style={{ marginTop: '4px', ...childrenContentStyle }}>
      {hamburgerPosition === 'left' ? children : <Row justify="end">{children}</Row>}
    </Col>
  );

  const hamburger = isHamburger && (
    <Col span={2}>
      <div onClick={onHamburgerClick}>{customHamburger}</div>
    </Col>
  );

  return (
    <Col {...colStyle[styleKey]}>
      <Row gutter={12} justify={justify} style={containerStyle}>
        {hamburgerPosition === 'left' ? (
          <>
            {hamburger}
            {content}
          </>
        ) : (
          <>
            {content}
            {hamburger}
          </>
        )}
      </Row>
    </Col>
  );
}

/**
 * `Header` component renders a responsive header with optional hamburger menu.
 * It takes custom content for the left and right sides of the header; which basically means that the header is split into 2 columns
 * The left side of the header is rendered by default on the left side of the header, and the right side of the header is rendered by default on the right side of the header.
 * Each columns are not divided equally, but rather the left side of the header is 18 columns wide, and the right side of the header is 6 columns wide.
 * And vice versa, depending on the `hamburgerPosition` prop.
 * Most of the times it just works out of the box, you only need to change the 'color' theme to match your app's theme.
 * The only way to know if you need to change the styling by yourself is to try it out.
 *
 * @param {IHeader} props - The properties to configure the header component.
 * @param {CSSProperties} [props.mainHeaderStyle] - Custom styles for the header container.
 * @param {React.ReactNode} [props.customHamburger] - Custom hamburger menu component.
 * @param {CSSProperties} [props.hamburgerStyle] - Custom styles for the hamburger menu.
 * @param {() => void} [props.onHamburgerClick] - Callback function to handle hamburger menu clicks.
 * @param {'left' | 'right'} [props.hamburgerPosition] - Position of the hamburger menu in the header ('left' or 'right').
 * @param {React.ReactNode} [props.leftHeaderChildren] - Custom content to be rendered on the left side of the header.
 * @param {React.ReactNode} [props.rightHeaderChildren] - Custom content to be rendered on the right side of the header.
 */
export function Header(props: IHeader) {
  const { customHamburger, hamburgerPosition, leftHeaderChildren, rightHeaderChildren } = props;

  return (
    <ContentContainer style={{ ...props.mainHeaderStyle }}>
      <Row justify="space-between">
        <HeaderChildren
          customHamburger={customHamburger}
          isHamburger={hamburgerPosition === 'left'}
          hamburgerPosition={hamburgerPosition}
          justify="start"
          childrenContentStyle={props.leftChildrenStyle}
          containerStyle={props.leftHeaderContainerStyle}
        >
          {leftHeaderChildren}
        </HeaderChildren>
        <HeaderChildren
          customHamburger={customHamburger}
          isHamburger={hamburgerPosition === 'right'}
          hamburgerPosition={hamburgerPosition}
          justify="end"
          childrenContentStyle={props.rightChildrenStyle}
          containerStyle={props.rightHeaderContainerStyle}
        >
          {rightHeaderChildren}
        </HeaderChildren>
      </Row>
    </ContentContainer>
  );
}
