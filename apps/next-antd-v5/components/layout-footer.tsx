import { Footer } from '@wsh4and/antd-v5';
import { IMainResponsive } from './layout';

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
