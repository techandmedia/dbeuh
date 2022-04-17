import { Descriptions, Typography } from 'antd';

const { Link } = Typography;

export default function FormDescriptionTab(props) {
  return (
    <Descriptions
      title="How to use Form Component"
      bordered
      style={{ marginBottom: 15, padding: '0px 20px 0px 20px' }}
    >
      <Descriptions.Item label="Link" span={3}>
        <Link href="https://ant.design/components/form/" target="_blank">
          Ant Design Form
        </Link>
        <br />
        <Link href="https://ant.design/components/card/" target="_blank">
          Ant Design Card
        </Link>
        <br />
        <Link href="https://ant.design/components/tabs/" target="_blank">
          Ant Design Tabs
        </Link>
      </Descriptions.Item>
      <Descriptions.Item label="Descriptions" span={3}>
        This custom form is a combination of form, card and tab component from Ant Design.
        <br />
        The styling is heavily customized so it support responsive design. In our actual app, we can
        just customize it freely
      </Descriptions.Item>
      <Descriptions.Item label="Remark" span={3}>
        Sider is disabled because usually we dont need sider when displaying a Sign In / Sign Up
        Form
      </Descriptions.Item>
    </Descriptions>
  );
}
