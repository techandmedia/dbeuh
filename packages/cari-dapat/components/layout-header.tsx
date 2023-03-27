import { Button, Col, Row, theme } from 'antd';
import { MenuOutlined, RetweetOutlined } from '@ant-design/icons';
import { IMainResponsive, menu1 } from './layout';
import { MenuHeader, renderMenuList } from '@wsh4and/antd';

export function MainHeader(props: IMainResponsive) {
  const themes = theme.useToken();
  const { token } = themes;
  const menuHeader = renderMenuList(menu1);
  // console.log('token', token);

  const commonStyle = {
    lineHeight: '64px',
  };
  const buttonColStyle = {
    ...commonStyle,
    paddingLeft: 12,
  };

  return (
    <Row
      justify="space-between"
      style={{
        backgroundColor: props.style.theme === 'light' ? '#ffffff' : '#001529',
      }}
    >
      <Col xs={12} md={0} style={buttonColStyle}>
        <Button
          icon={<MenuOutlined style={{ color: token.colorPrimary }} />}
          onClick={() => {
            props.setStyle((prev) => ({
              ...prev,
              collapsed: prev.collapsed ? false : true,
              outerLayoutStyle: {
                ...prev.outerLayoutStyle,
                marginLeft: prev.collapsed ? 0 : 0,
              },
            }));
          }}
        />
      </Col>
      <Col xs={2} md={20}>
        <MenuHeader menus={menuHeader} defaultSelectedKeys={['/']} />
      </Col>
      <Col
        span={2}
        style={{ ...commonStyle, marginRight: props.style.mobile ? 0 : 0 }}
      >
        <Button
          icon={<RetweetOutlined style={{ color: token.colorPrimary }} />}
          onClick={() => {
            props.setStyle((prev) => ({
              ...prev,
              theme: prev.theme === 'light' ? 'dark' : 'light',
            }));
          }}
        ></Button>
      </Col>
    </Row>
  );
}
