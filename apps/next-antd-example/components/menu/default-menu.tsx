import { MailOutlined } from '@ant-design/icons';
import { ItemType } from 'antd/lib/menu/hooks/useItems';

const defaultHomeMenu: ItemType[] = [
  {
    key: '/',
    label: 'Logo',
    icon: <MailOutlined />,
  },
];

const defaultPublicMenu: ItemType[] = [
  ...defaultHomeMenu,
  {
    key: '/about-us',
    label: 'About Us',
    icon: <MailOutlined />,
  },
  {
    key: '/blog',
    label: 'Blog',
    icon: <MailOutlined />,
  },
  {
    key: '/sample',
    label: 'Sample',
    icon: <MailOutlined />,
    children: [
      {
        key: '/sample/table',
        label: 'Table',
        icon: <MailOutlined />,
        children: [
          {
            key: '/sample/table/default',
            label: 'Default',
            icon: <MailOutlined />,
          },
          {
            key: '/sample/table/table-pagination',
            label: 'With Pagination',
            icon: <MailOutlined />,
          },
        ],
      },
      {
        key: '/sample/form',
        label: 'Form',
        icon: <MailOutlined />,
        children: [
          {
            key: '/sample/form/default',
            label: 'Default',
            icon: <MailOutlined />,
          },
          {
            key: '/sample/form/tab',
            label: 'With Tab',
            icon: <MailOutlined />,
          },
          {
            key: '/sample/form/dual',
            label: 'Dual Column Form',
            icon: <MailOutlined />,
          },
        ],
      },
      {
        key: '/sample/responsive-container',
        label: 'Responsive Container',
        icon: <MailOutlined />,
        children: [
          {
            key: '/sample/responsive-container',
            label: 'Default',
            icon: <MailOutlined />,
          },
        ],
      },
    ],
  },
];

// const menuAdmin: ItemType[] = [
//   {
//     key: '/admin',
//     label: 'Admin',
//     icon:  <MailOutlined />,
//     submenus: [
//       {
//         key: '/admin/pendaftaran/',
//         label: 'Pendaftaran',
//         icon:  <MailOutlined />,
//         submenus: [
//           {
//             key: '/admin/pendaftaran/s1',
//             label: 'S1',
//             icon:  <MailOutlined />,
//           },
//           {
//             key: '/admin/pendaftaran/s2',
//             label: 'S2',
//             icon:  <MailOutlined />,
//           },
//           {
//             key: '/admin/pendaftaran/s3',
//             label: 'S3',
//             icon:  <MailOutlined />,
//           },
//         ],
//       },
//       {
//         key: '/admin/pembayaran/',
//         label: 'Pembayaran',
//         icon:  <MailOutlined />,
//         submenus: [
//           {
//             key: '/admin/pembayaran/pendaftaran',
//             label: 'Pendaftaran',
//             icon:  <MailOutlined />,
//           },
//           {
//             key: '/admin/pembayaran/ujian',
//             label: 'Ujian',
//             icon:  <MailOutlined />,
//           },
//           {
//             key: '/admin/pembayaran/wisuda',
//             label: 'Wisuda',
//             icon:  <MailOutlined />,
//           },
//         ],
//       },
//       {
//         key: '/admin/akademik/',
//         label: 'Akademik',
//         icon:  <MailOutlined />,
//         submenus: [
//           {
//             key: '/admin/akademik/ganti-atribut',
//             label: 'Atribut',
//             icon:  <MailOutlined />,
//           },
//           {
//             key: '/admin/akademik/informasi-umum',
//             label: 'Informasi Umum',
//             icon:  <MailOutlined />,
//           },
//         ],
//       },
//     ],
//   },
// ];

const defaultPrivateMenu: ItemType[] = [
  ...defaultHomeMenu,
  // ...menuAdmin
];

export { defaultPublicMenu, defaultPrivateMenu };
