import { Layout, Header, Content, Footer, Sider } from '@dbeuh/antd';

interface LayoutProps {
  children: React.ReactNode;
}

// Local Components
// Mix and Match your layout as needed
export default function MainLayout(props: LayoutProps) {
  return (
    <Layout>
      {/* <Sider breakpoint="lg" />
      <Layout>
        <Header style={{ padding: 0, background: '#fff' }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            {props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout> */}
    </Layout>
  );
}
