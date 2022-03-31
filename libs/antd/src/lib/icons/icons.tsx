import {
  BookOutlined,
  BarChartOutlined,
  CloudUploadOutlined,
  DollarOutlined,
  DownloadOutlined,
  FormOutlined,
  CheckCircleTwoTone,
  LockOutlined,
  PlusSquareOutlined,
  PrinterOutlined,
  RedoOutlined,
  RollbackOutlined,
  SearchOutlined,
  SolutionOutlined,
  UserOutlined,
  UsergroupAddOutlined,
  MinusCircleTwoTone,
  LeftOutlined,
  EditOutlined,
  DeleteOutlined,
  LoginOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { CSSProperties } from 'react';

type IconType1 = 'add' | 'back' | 'book' | 'dashboard' | 'download' | 'lock' | 'master';
type IconType2 = 'multi-user' | 'payment' | 'print' | 'reset' | 'search' | 'solution';
type IconType3 = 'status-yes' | 'status-no' | 'upload' | 'user' | 'close-product-details';
type IconType4 = 'create-form' | 'edit-form' | 'delete-form' | 'login' | 'logout';

export declare type IconType = IconType1 | IconType2 | IconType3 | IconType4;

export interface IIconProps {
  type: IconType | undefined;
  style?: CSSProperties;
  'status-no-color'?: string;
  'status-yes-color'?: string;
}

export function Icons(props: IIconProps) {
  // return <CheckCircleTwoTone style={{ ...props.style }} twoToneColor="#52c41a" />;
  // return <MinusCircleTwoTone style={{ ...props.style }} twoToneColor="#eb2f96" />;

  switch (props.type) {
    case 'add':
      return <PlusSquareOutlined style={{ ...props.style }} />;

    case 'back':
      return <RollbackOutlined style={{ ...props.style }} />;

    case 'book':
      return <BookOutlined style={{ ...props.style }} />;

    case 'dashboard':
      return <BarChartOutlined style={{ ...props.style }} />;

    case 'download':
      return <DownloadOutlined style={{ ...props.style }} />;

    case 'lock':
      return <LockOutlined style={{ ...props.style }} />;

    case 'master':
      return <FormOutlined style={{ ...props.style }} />;

    case 'multi-user':
      return <UsergroupAddOutlined style={{ ...props.style }} />;

    case 'payment':
      return <DollarOutlined style={{ ...props.style }} />;

    case 'print':
      return <PrinterOutlined style={{ ...props.style }} />;

    case 'reset':
      return <RedoOutlined style={{ ...props.style }} />;

    case 'search':
      return <SearchOutlined style={{ ...props.style }} />;

    case 'solution':
      return <SolutionOutlined style={{ ...props.style }} />;

    case 'status-yes':
      return <CheckCircleTwoTone style={{ ...props.style }} />;

    case 'status-no':
      return <MinusCircleTwoTone style={{ ...props.style }} />;

    case 'upload':
      return <CloudUploadOutlined style={{ ...props.style }} />;

    case 'user':
      return <UserOutlined style={{ ...props.style }} />;

    case 'close-product-details':
      return <LeftOutlined style={{ ...props.style }} />;

    case 'create-form':
      return <FormOutlined style={{ ...props.style }} />;

    case 'edit-form':
      return <EditOutlined style={{ ...props.style }} />;

    case 'delete-form':
      return <DeleteOutlined style={{ ...props.style }} />;

    case 'login':
      return <LoginOutlined style={{ ...props.style }} />;

    case 'logout':
      return <LogoutOutlined style={{ ...props.style }} />;

    default:
      return null;
  }
}
