import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { cleanup, render } from '@testing-library/react';
import { Button, Input } from 'antd';

import { Form, IFormItem, useForm } from './form';

function remapFormItem(): IFormItem[] {
  const formfields: IFormItem[] = [
    {
      key: 'username',
      name: 'username',
      label: 'Username',
      component: (
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      ),
      rules: [
        {
          required: true,
          message: 'Please input your Username!',
        },
      ],
    },
    {
      key: 'password',
      name: 'password',
      label: 'Password',
      component: (
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      ),
      rules: [
        {
          required: true,
          message: 'Please input your Password!',
        },
      ],
    },
  ];

  return formfields;
}

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

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

beforeAll(() => {
  cleanup();
});

describe('Form', () => {
  it('should render successfully', () => {
    // const [form] = useForm();
    const formfields = remapFormItem();
    const { baseElement } = render(
      <Form
        formProps={{
          name: 'Sign In Form - VERTICAL',
          // form: form,
          layout: 'vertical',
          onFinish: () => console.log('submit'),
        }}
        formfields={formfields}
        submitbutton={
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Submit
          </Button>
        }
        formItemLayout={formItemLayout}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
