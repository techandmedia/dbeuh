/* eslint-disable react/no-unescaped-entities */
import { Button, Descriptions, Divider, Typography } from 'antd';

// Shared Libraries
import { Form, useForm } from '@wsh4and/antd';

// Local Libraries
import { remapFormItem } from './form-fields';

const { Text, Link } = Typography;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
    md: { span: 8 },
    lg: { span: 6 },
    xl: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 24 },
    lg: { span: 10 },
    xl: { span: 8 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 2,
      offset: 0,
    },
    sm: {
      span: 2,
      offset: 2,
    },
    md: {
      span: 2,
      offset: 8,
    },
    lg: {
      span: 2,
      offset: 6,
    },
    xl: {
      span: 2,
      offset: 4,
    },
  },
};

export default function Page(props) {
  const [form] = useForm();
  const formfields = remapFormItem();

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <>
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
          This custom form is a combination of form and card component from Ant Design. It received
          an array of form item which basically a component
          <br />
          <Text code mark>
            formfields
          </Text>
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
      {/* 
      If Layout is vertical, and you want to make button submit as wide as the form item, 
      then add width 100% to the button style, and disable tailFormItemLayout
      Otherwise, remove the width and enable tailFormItemLayout
       */}
      <Form
        formProps={{
          name: 'Sign In Form - VERTICAL',
          form: form,
          layout: 'vertical',
          onFinish: onSubmit,
        }}
        formfields={formfields}
        submitbutton={
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Submit
          </Button>
        }
        formItemLayout={formItemLayout}
      />

      <br />
      <Form
        formProps={{
          name: 'Sign In Form - VERTICAL - IN-CARD-TITLE BUTTON',
          form: form,
          layout: 'vertical',
          onFinish: onSubmit,
        }}
        formfields={formfields}
        submitbuttonPosition="in-card-title"
        submitbutton={
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        }
        formItemLayout={formItemLayout}
      />

      <br />
      <Form
        formProps={{ name: 'Sign In Form - HORIZONTAL/DEFAULT', form: form, onFinish: onSubmit }}
        formfields={formfields}
        submitbutton={
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        }
        formItemLayout={formItemLayout}
        tailFormItemLayout={tailFormItemLayout}
      />

      <br />
      <Form
        formProps={{
          name: 'Sign In Form - HORIZONTAL/DEFAULT - IN-CARD-TITLE BUTTON',
          form: form,
          layout: 'horizontal',
          onFinish: onSubmit,
        }}
        formfields={formfields}
        submitbuttonPosition="in-card-title"
        submitbutton={
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        }
        formItemLayout={formItemLayout}
      />
    </>
  );
}
