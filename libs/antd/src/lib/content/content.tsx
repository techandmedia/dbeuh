import { CSSProperties } from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

export interface IContent {
  style?: CSSProperties;
  children: React.ReactNode;
}

function NewContent(props: IContent) {
  return <Content style={props.style}>{props.children}</Content>;
}

export { NewContent as Content };
