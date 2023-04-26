import { CSSProperties } from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

interface IContentContainer {
  style?: CSSProperties;
  children: React.ReactNode;
}

export function ContentContainer({ style, children }: IContentContainer) {
  return (
    <Content
      style={{
        backgroundColor: '#fff',
        padding: '24px 24px 24px 24px',
        borderRadius: 'var(--border-radius-base)',
        overflow: 'auto',
        ...style,
      }}
    >
      {children}
    </Content>
  );
}
