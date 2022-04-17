/* eslint-disable react/no-unescaped-entities */
import { Descriptions, Divider, Typography } from 'antd';

const { Text, Link } = Typography;

export default function FormDescriptionDefault(props) {
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
        This custom form is a combination of form and card component from Ant Design. It received an
        array of form item which basically a component
        <br />
        <Text code mark>
          formfields
        </Text>
        <br />
        There's a props called noCard which usefull when you dont want mess with the layout of the
        form. Normal form will use card to wrap the entire form item.
      </Descriptions.Item>
      <Descriptions.Item label="Remark" span={3}>
        In the sample code, we use a function to return an array of form items so we can pass any
        argument to the function.
        <br />
        <Text code mark>
          remapFormItem(arg1, arg2)
        </Text>
        <Divider style={{ margin: 10 }} />
      </Descriptions.Item>
    </Descriptions>
  );
}
