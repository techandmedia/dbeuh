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
          prefix={<UserOutlined className="site-form-item-icon" />}
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
          prefix={<LockOutlined className="site-form-item-icon" />}
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
  ];

  return formfields;
}
