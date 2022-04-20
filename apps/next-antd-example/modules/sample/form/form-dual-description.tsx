/* eslint-disable react/no-unescaped-entities */
import { Descriptions, Divider, Typography } from 'antd';

const { Text, Link } = Typography;

export default function FormDescriptionDual(props) {
  return (
    <Descriptions title="How to use Form Component" bordered style={{ marginBottom: 15 }}>
      <Descriptions.Item label="Link" span={3}>
        <Link href="https://ant.design/components/form/" target="_blank">
          Ant Design Form
        </Link>
        <br />
        <Link href="https://ant.design/components/card/" target="_blank">
          Ant Design Card
        </Link>
      </Descriptions.Item>
      <Descriptions.Item label="Descriptions" span={3}>
        A simple implementation of Row and Col to make a dual column form
      </Descriptions.Item>
      <Descriptions.Item label="Remark" span={3}>
        Use it if you just need to a simple dual column
        <Divider style={{ margin: 10 }} />
        Might just manually use a Row and Col combination to better control the layout of the form
        item
      </Descriptions.Item>
    </Descriptions>
  );
}
