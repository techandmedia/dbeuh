import { CSSProperties, useState } from 'react';
import { ConfigProvider, Layout } from 'antd';

export interface ILayout {
  style?: CSSProperties;
  children: React.ReactNode;
}

function NewLayout(props: ILayout) {
  const [color, setColor] = useState({
    primaryColor: '#1890ff',
    errorColor: '#ff4d4f',
    warningColor: '#faad14',
    successColor: '#52c41a',
    infoColor: '#1890ff',
  });

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

  return <Layout {...props}>{props.children}</Layout>;
}

export { NewLayout as Layout };
