import React, { CSSProperties, useEffect, useState } from 'react';
import { Button, Grid, Layout, MenuProps, theme } from 'antd';
import { ContentContainer, Header, IHeader, SideMenu } from '@wsh4and/antd';
import { CopyOutlined } from '@ant-design/icons';
import {
  childrenContentStyle,
  hamburgerStyle,
  mainHeaderStyle,
  layoutStyle,
  leftChildrenStyle,
  leftHeaderContainerStyle,
  rightChildrenStyle,
  rightHeaderContainerStyle,
  utilitiesStyle,
} from './styles';
import { useRouter } from 'next/router';

const { Footer } = Layout;

interface IMainLayout {
  style?: CSSProperties;
  children: React.ReactNode;
}

interface ILayoutStyle extends IHeader {
  children?: React.ReactNode;
  hamburgerStyle?: CSSProperties;
  childrenHeaderStyle?: CSSProperties;
  childrenContentStyle?: CSSProperties;
  layoutStyle?: CSSProperties;
  utilitiesStyle?: CSSProperties;
}

interface IHambuger {
  color: string;
  width?: number | string;
  height?: number | string;
  onClick?: () => void;
}

const menuItems: MenuProps['items'] = [
  {
    label: 'Home',
    key: '/',
    icon: <CopyOutlined />,
  },
  {
    label: 'Supabase',
    key: '/supabase',
    icon: <CopyOutlined />,
  },
  {
    label: 'Profile',
    key: 'profile',
    children: [
      {
        label: 'Edit Profile',
        key: '/user/calon-mahasiswa/edit-profile',
        icon: <CopyOutlined />,
      },
      {
        label: 'Edit Password',
        key: '/user/calon-mahasiswa/edit-password',
        icon: <CopyOutlined />,
      },
    ],
  },
];

function IconHamburger(props: IHambuger) {
  return (
    <Button
      type="primary"
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={props.width}
          height={props.height}
          viewBox="0 0 448 512"
          fill={props.color}
        >
          <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
        </svg>
      }
      style={{
        backgroundColor: 'rgba(0,0,0,0)',
        border: 'none',
        outline: 'none',
      }}
      onClick={props.onClick}
    ></Button>
  );
}

export function MainLayout({ children }: IMainLayout) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const router = useRouter();

  const [styles, setStyles] = useState<ILayoutStyle>({
    childrenContentStyle,
    layoutStyle,
    utilitiesStyle,
    mainHeaderStyle,
    hamburgerStyle,
    leftChildrenStyle,
    rightChildrenStyle,
    leftHeaderContainerStyle,
    rightHeaderContainerStyle,
  });
  const [layoutSize, setLayoutSize] = useState('Desktop');
  const [collapsed, setCollapsed] = useState(false);

  function onMenuClick(e) {
    // if (e.key === 'logout') {
    //   dispatchUser({ type: 'logout' });
    //   setMenuItems(defaultMenuItems);
    // } else {
    // }
    router.push(e.key);
    if (layoutSize === 'Desktop') {
      setCollapsed(false);
    } else {
      setCollapsed(!collapsed);
    }
  }

  useEffect(() => {
    console.log(screens);

    if (screens.xs && !screens.sm) {
      setLayoutSize('Smartphone');
      setStyles((s) => ({
        ...s,
        hamburgerStyle: { ...s.hamburgerStyle, color: 'orangered' },
        layoutStyle: { ...s.layoutStyle, marginLeft: '0px' },
      }));
      setCollapsed(true);
    }
    if (screens.md && screens.sm) {
      setLayoutSize('Tablet');
      setStyles((s) => ({
        ...s,
        hamburgerStyle: { ...s.hamburgerStyle, color: 'rebeccapurple' },
        layoutStyle: { ...s.layoutStyle, marginLeft: '10px' },
      }));
      setCollapsed(true);
    }
    if (screens.md && screens.lg) {
      setLayoutSize('Desktop');
      setStyles((s) => ({
        ...s,
        hamburgerStyle: { ...s.hamburgerStyle, color: 'rebeccapurple' },
        layoutStyle: { ...s.layoutStyle, marginLeft: '20px' },
      }));
      setCollapsed(false);
    }
  }, [screens]);

  useEffect(() => {
    if (layoutSize === 'Desktop') {
      setStyles((s) => ({
        ...s,
        layoutStyle: {
          ...s.layoutStyle,
          marginLeft: collapsed ? '12px' : '20px',
          marginRight: collapsed ? '12px' : '0px',
        },
      }));
    }
  }, [layoutSize, collapsed]);

  return (
    <Layout>
      <SideMenu
        builtInHamburger={null}
        collapsed={collapsed}
        menuItems={menuItems}
        logo={
          <div style={{ textAlign: 'center' }}>
            <svg width="150" height="150" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="150" height="150" fill="#f5f5f5" />
              <rect x="25" y="25" width="100" height="100" fill="#00a6e3" />
              <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#fff" fontSize="60">
                S
              </text>
            </svg>
          </div>
        }
        onMenuClick={onMenuClick}
      />
      <Layout style={styles.layoutStyle}>
        <Header
          hamburgerPosition="left"
          leftHeaderChildren={layoutSize}
          rightHeaderChildren={layoutSize}
          customHamburger={
            <IconHamburger
              color={styles.hamburgerStyle.color ?? 'red'}
              height="24"
              width="24"
              onClick={() => setCollapsed(!collapsed)}
            />
          }
          mainHeaderStyle={styles.mainHeaderStyle}
          leftChildrenStyle={{ marginLeft: '12px' }}
          leftHeaderContainerStyle={{ marginRight: '0px' }}
          rightHeaderContainerStyle={styles.rightHeaderContainerStyle}
          // rightChildrenStyle={{ marginLeft: '0px' }}
        />
        <ContentContainer style={styles.utilitiesStyle}>Utilities/Dropdown/Breadcrum</ContentContainer>
        <div style={{ minHeight: '80vh', background: colorBgContainer }}>
          <ContentContainer>{children}</ContentContainer>
        </div>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
}
