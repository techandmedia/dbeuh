import { Breadcrumb } from 'antd';

/* eslint-disable-next-line */
export interface IBreadcrumb {}

function NewBreadcrumb(props: IBreadcrumb) {
  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>List</Breadcrumb.Item>
      <Breadcrumb.Item>App</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export { NewBreadcrumb as Breadcrumb };
