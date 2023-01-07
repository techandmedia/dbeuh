import { Button, Space } from '@wsh4and/antd-v5';

export default function Index() {
  return (
    <Space wrap>
      <h1>TES</h1>;<Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
    </Space>
  );
}
