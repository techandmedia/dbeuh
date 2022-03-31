import { CSSProperties, useState } from 'react';
import { Button, ConfigProvider } from 'antd';

// Shared Antd-Components
import { Breadcrumb, Content, Header, Icons, IMenuItem, Layout, Menu, Sider } from '@dbeuh/antd';
import { NavLink } from './nav-link';

export interface ILayout {
  children: React.ReactNode;
}

function NewLayout({ children }: ILayout) {
  const [color, setColor] = useState({
    primaryColor: '#1890ff',
    errorColor: '#ff4d4f',
    warningColor: '#faad14',
    successColor: '#52c41a',
    infoColor: '#1890ff',
  });
  const [collapsed, setCollapsed] = useState(false);

  const menus: IMenuItem[] = [
    {
      key: 'home',
      component: <NavLink href="/" title="home" iconType="book" collapsed={collapsed} />,
    },
    {
      key: 'satu',
      component: <NavLink href="/satu" title="satu" iconType="book" collapsed={collapsed} />,
    },
    {
      key: 'dua',
      component: <NavLink href="/dua" title="dua" iconType="book" collapsed={collapsed} />,
    },
    {
      key: 'tiga',
      component: <NavLink href="/tiga" title="tiga" iconType="book" collapsed={collapsed} />,
    },
    {
      key: 'empat',
      submenuicon: 'download',
      component: <span>Empat A</span>,
      submenus: [
        {
          key: 'empat-a1',
          component: <NavLink href="/dua" title="empat-a1" iconType="book" collapsed={collapsed} />,
        },
        {
          key: 'empat-a2',
          component: <NavLink href="/dua" title="empat-a2" iconType="book" collapsed={collapsed} />,
        },
      ],
    },
    {
      key: 'lima',
      component: <span>Lima A</span>,
      groupmenus: [
        {
          key: 'lima-a1',
          grouptitle: 'lima-a1',
          menus: [
            {
              key: 'lima-a11',
              component: (
                <NavLink href="/dua" title="lima-a11" iconType="book" collapsed={collapsed} />
              ),
            },
            {
              key: 'lima-a12',
              component: (
                <NavLink href="/dua" title="lima-a12" iconType="book" collapsed={collapsed} />
              ),
            },
          ],
        },
        {
          key: 'lima-a21',
          grouptitle: 'lima-a21',
          menus: [
            {
              key: 'lima-a121',
              component: (
                <NavLink href="/dua" title="lima-a121" iconType="book" collapsed={collapsed} />
              ),
            },
            {
              key: 'lima-a122',
              component: (
                <NavLink href="/3" title="lima-a122" iconType="dashboard" collapsed={collapsed} />
              ),
            },
          ],
        },
      ],
    },
    {
      key: 'enam',
      submenuicon: 'create-form',
      component: <span>Enam A</span>,
      groupmenus: [
        {
          key: 'enam-a1',
          grouptitle: 'enam-a1',
          menus: [
            {
              key: 'enam-a11',
              component: (
                <NavLink href="/3" title="enam-a11" iconType="dashboard" collapsed={collapsed} />
              ),
            },
            {
              key: 'enam-a12',
              component: (
                <NavLink href="/3" title="enam-a12" iconType="dashboard" collapsed={collapsed} />
              ),
            },
          ],
        },
        {
          key: 'enam-a21',
          grouptitle: 'enam-a21',
          menus: [
            {
              key: 'enam-a121',
              component: (
                <NavLink href="/3" title="enam-a121" iconType="dashboard" collapsed={collapsed} />
              ),
            },
            {
              key: 'enam-a122',
              component: (
                <NavLink href="/3" title="enam-a122" iconType="dashboard" collapsed={collapsed} />
              ),
            },
          ],
        },
      ],
    },
    {
      key: 'logout',
      component: (
        <Button type="text" onClick={() => console.log('logout')} icon={<Icons type="logout" />}>
          Logout
        </Button>
      ),
    },
  ];

  function onColorChange(nextColor: CSSProperties) {
    const mergedNextColor = {
      ...color,
      ...nextColor,
    };
    setColor(mergedNextColor);
    ConfigProvider.config({
      theme: mergedNextColor,
    });
  }

  return (
    <Layout>
      {/* <Header> */}
      <Menu
        menus={menus}
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={['dua']}
        style={{ marginBottom: 5 }}
      />
      {/* </Header> */}
      {/* style={{ marginBottom: 300 }} */}
      <Layout>
        <Sider>
          <Menu
            menus={menus}
            theme="light"
            mode="inline"
            defaultSelectedKeys={['dua']}
            defaultOpenKeys={['enam-a21']}
            style={{ height: '100%', borderRight: 0 }}
          />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb />
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              backgroundColor: '#fff',
              borderRadius: 4,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export { NewLayout as Layout };
