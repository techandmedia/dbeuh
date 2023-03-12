import { Layout } from 'antd';
import { IMainResponsive } from './layout';

const { Footer } = Layout;

export function MainFooter(props: IMainResponsive) {
  return (
    <Footer
      style={{
        textAlign: 'center',
        backgroundColor: 'white',
        margin: 0,
        padding: props.style.mobile ? 12 : 18,
        fontSize: props.style.mobile ? 12 : 14,
      }}
    >
      Ant Design ©2018 Created by Ant UED
    </Footer>
  );
}
