import { Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

// Shared Libraries
import { IFormItem } from '@wsh4and/antd';
import { CSSProperties } from 'react';

const inputStyle = {
  padding: '10px 16px 10px 16px',
  borderRadius: 4,
};

export function remapFormItem(label = true, style?: CSSProperties): IFormItem[] {
  const formfields: IFormItem[] = [
    {
      key: 'username',
      name: 'username',
      label: label ? 'Username' : null,
      component: (
        <Input
          prefix={<UserOutlined />}
          placeholder="Username"
          style={{ ...inputStyle, ...style }}
        />
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
      label: label ? 'Password' : null,
      component: (
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
          style={{ ...inputStyle, ...style }}
        />
      ),
      rules: [
        {
          required: true,
          message: 'Please input your Password!',
        },
      ],
    },
    {
      key: 'email',
      name: 'email',
      label: label ? 'Email' : null,
      component: <Input type="email" placeholder="Email" style={{ ...inputStyle, ...style }} />,
      rules: [{ type: 'email', required: true, message: 'Please input your Email!' }],
    },
    {
      key: 'phone',
      name: 'phone',
      label: label ? 'Phone Number' : null,
      component: <Input style={{ ...inputStyle, ...style }} />,
      rules: [{ required: true, message: 'Please input your phone number!' }],
    },
  ];

  return formfields;
}

export function remapDualFormItem(label = true, style?: CSSProperties) {
  const formfields: IFormItem[] = [
    {
      key: 'username',
      name: 'username',
      label: label ? 'Username' : null,
      component: (
        <Input
          prefix={<UserOutlined />}
          placeholder="Username"
          style={{ ...inputStyle, ...style }}
        />
      ),
      rules: [
        {
          required: true,
          message: 'Please input your Username!',
        },
      ],
    },
    {
      key: 'email',
      name: 'email',
      label: label ? 'Email' : null,
      component: <Input type="email" placeholder="Email" style={{ ...inputStyle, ...style }} />,
      rules: [{ type: 'email', required: true, message: 'Please input your Email!' }],
    },
  ];

  const formfields2: IFormItem[] = [
    {
      key: 'password',
      name: 'password',
      label: label ? 'Password' : null,
      component: (
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
          style={{ ...inputStyle, ...style }}
        />
      ),
      rules: [
        {
          required: true,
          message: 'Please input your Password!',
        },
      ],
    },
    {
      key: 'phone',
      name: 'phone',
      label: label ? 'Phone Number' : null,
      component: <Input style={{ ...inputStyle, ...style }} />,
      rules: [{ required: true, message: 'Please input your phone number!' }],
    },
  ];

  return { formfields, formfields2 };
}
