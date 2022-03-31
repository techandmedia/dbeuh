/* eslint-disable @typescript-eslint/no-empty-interface */
import { Layout } from 'antd';
import { BasicProps } from 'antd/lib/layout/layout';

const { Footer } = Layout;

export interface IFooter extends BasicProps {}

function NewFooter(props: IFooter) {
  return <Footer>{props.children}</Footer>;
}

export { NewFooter as Footer };
