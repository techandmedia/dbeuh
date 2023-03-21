import React, { Dispatch, SetStateAction, useState } from 'react';
import { Breadcrumb, theme, ConfigProvider } from 'antd';
import {
  CopyOutlined,
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { MainHeader } from './layout-header';
import { MainSider } from './layout-sider';
import { MainFooter } from './layout-footer';
import {
  IMenuProps,
  IUseResponsive,
  ResponsiveLayout,
  useResponsive,
} from '@wsh4and/antd';

export const menu1: IMenuProps[] = [
  {
    label: <div className="logo">cari-dapat</div>,
    key: '/',
  },
  {
    label: 'Coba',
    key: '/coba',
    icon: <CopyOutlined />,
  },
  {
    label: 'Nested',
    key: '',
    icon: <NotificationOutlined />,
    children: [
      {
        label: 'Nested 1',
        key: '/coba-nested',
        icon: <CopyOutlined />,
      },
      {
        label: 'Nested 2',
        key: '/coba-nested2',
        icon: <CopyOutlined />,
      },
    ],
  },
  {
    label: 'Double Nested',
    key: '',
    icon: <UserOutlined />,
    children: [
      {
        label: 'Double Nested 1',
        key: '/coba-nested',
        icon: <CopyOutlined />,
      },
      {
        label: 'Double Nested 2',
        key: '',
        icon: <CopyOutlined />,
        children: [
          {
            label: 'Double Nested 3',
            key: '/coba-nested',
            icon: <CopyOutlined />,
          },
          {
            label: 'Double Nested 4',
            key: '/coba-nested2',
            icon: <CopyOutlined />,
          },
        ],
      },
    ],
  },
];

export interface IMainResponsive {
  style?: IUseResponsive;
  setStyle?: Dispatch<SetStateAction<IUseResponsive>>;
}

// export function MainBreadCrumb(props: IMainResponsive) {
//   return (
//     <Breadcrumb
//       style={{
//         marginBottom: 8,
//         border: '2px solid red',
//       }}
//     >
//       <Breadcrumb.Item>Home</Breadcrumb.Item>
//       <Breadcrumb.Item>List</Breadcrumb.Item>
//       <Breadcrumb.Item>App</Breadcrumb.Item>
//     </Breadcrumb>
//   );
// }

type ThemeData = {
  borderRadius: number;
  colorPrimary: string;
};

const defaultTheme: ThemeData = {
  borderRadius: 6,
  colorPrimary: '#FF4500',
};

export default function AppLayout({ children }) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { style, setStyle } = useResponsive({ alignment: 'left' });
  const [themes, setThemes] = useState<ThemeData>(defaultTheme);

  return (
    <ConfigProvider
      theme={{
        token: { ...themes },
      }}
    >
      <ResponsiveLayout
        header={<MainHeader style={style} setStyle={setStyle} />}
        // breadcrumb={<MainBreadCrumb style={style} />}
        // sider={<MainSider style={style} />}
        footer={<MainFooter style={style} />}
        rootLayoutStyle={style.rootLayoutStyle}
        innerLayoutStyle={style.innerLayoutStyle}
        contentStyle={style.contentStyle}
        outerLayoutStyle={style.outerLayoutStyle}
      >
        {children}
      </ResponsiveLayout>
    </ConfigProvider>
  );
}
