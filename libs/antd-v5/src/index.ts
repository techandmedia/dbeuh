import { Layout } from 'antd';

export * from './lib/menu-sider/index';

const { Header, Footer, Sider } = Layout;

export type { PaginationProps, MenuProps, MenuTheme } from 'antd';
export {
  Button,
  Col,
  Row,
  Breadcrumb,
  Menu,
  theme,
  ConfigProvider,
  Divider,
  Space,
  notification,
  Checkbox,
  Form,
  Input,
} from 'antd';
export * from './lib/menu-header/index';
export * from './lib/menu-link/menu-link';
export * from './lib/notification';
export * from './lib/table/table';
export * from './lib/responsive-layout/responsive-layout';
export { Layout, Header, Footer, Sider };
