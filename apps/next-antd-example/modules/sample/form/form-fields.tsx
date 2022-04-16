import { Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

// Shared Libraries
import { IFormItem } from '@wsh4and/antd';

export function remapFormItem(): IFormItem[] {
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
