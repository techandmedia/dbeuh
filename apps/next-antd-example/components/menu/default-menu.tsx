import { INextLink } from '@wsh4and/antd';

const defaultHomeMenu: INextLink[] = [
  {
    href: '/',
    title: 'Logo',
    iconType: 'master',
  },
];

const defaultPublicMenu: INextLink[] = [
  ...defaultHomeMenu,
  {
    href: '/about-us',
    title: 'About Us',
    iconType: 'master',
  },
  {
    href: '/blog',
    title: 'Blog',
    iconType: 'book',
  },
  {
    href: '/sample',
    title: 'Sample',
    iconType: 'master',
    submenus: [
      {
        href: '/sample/table',
        title: 'Table',
        iconType: 'master',
        submenus: [
          {
            href: '/sample/table/default',
            title: 'Default',
            iconType: 'master',
          },
          {
            href: '/sample/table/table-pagination',
            title: 'With Pagination',
            iconType: 'master',
          },
        ],
      },
      {
        href: '/sample/form',
        title: 'Form',
        iconType: 'master',
        submenus: [
          {
            href: '/sample/form/default',
            title: 'Default',
            iconType: 'master',
          },
          {
            href: '/sample/form/tab',
            title: 'With Tab',
            iconType: 'master',
          },
          {
            href: '/sample/form/dual',
            title: 'Dual Column Form',
            iconType: 'master',
          },
        ],
      },
    ],
  },
];

const menuAdmin: INextLink[] = [
  {
    href: '/admin',
    title: 'Admin',
    iconType: 'master',
    submenus: [
      {
        href: '/admin/pendaftaran/',
        title: 'Pendaftaran',
        iconType: 'master',
        submenus: [
          {
            href: '/admin/pendaftaran/s1',
            title: 'S1',
            iconType: 'master',
          },
          {
            href: '/admin/pendaftaran/s2',
            title: 'S2',
            iconType: 'master',
          },
          {
            href: '/admin/pendaftaran/s3',
            title: 'S3',
            iconType: 'master',
          },
        ],
      },
      {
        href: '/admin/pembayaran/',
        title: 'Pembayaran',
        iconType: 'master',
        submenus: [
          {
            href: '/admin/pembayaran/pendaftaran',
            title: 'Pendaftaran',
            iconType: 'master',
          },
          {
            href: '/admin/pembayaran/ujian',
            title: 'Ujian',
            iconType: 'master',
          },
          {
            href: '/admin/pembayaran/wisuda',
            title: 'Wisuda',
            iconType: 'master',
          },
        ],
      },
      {
        href: '/admin/akademik/',
        title: 'Akademik',
        iconType: 'master',
        submenus: [
          {
            href: '/admin/akademik/ganti-atribut',
            title: 'Atribut',
            iconType: 'master',
          },
          {
            href: '/admin/akademik/informasi-umum',
            title: 'Informasi Umum',
            iconType: 'master',
          },
        ],
      },
    ],
  },
];

const defaultPrivateMenu: INextLink[] = [...defaultHomeMenu, ...menuAdmin];

export { defaultPublicMenu, defaultPrivateMenu };
