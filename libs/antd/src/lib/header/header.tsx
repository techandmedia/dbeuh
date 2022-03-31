import { Layout } from 'antd';

const { Header } = Layout;

export interface IHeader extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function NewHeader(props: IHeader) {
  return (
    <Header {...props}>
      {/* <div className="logo" /> */}
      {props.children}
    </Header>
  );
}

export { NewHeader as Header };
