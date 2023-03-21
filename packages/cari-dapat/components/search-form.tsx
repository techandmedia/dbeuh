import { Button, Form, Input, Select } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

export default function SearchForm({ categories, onFinish, onFinishFailed }) {
  return (
    <div className="form-search">
      <Form
        name="basic"
        initialValues={{ remember: true }}
        layout="inline"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <SearchOutlined style={{ fontSize: 20 }} />
        <Form.Item name="search">
          <Input placeholder="Cari..." bordered={false} />
        </Form.Item>
        <Form.Item name="categories">
          <Select
            defaultValue={null}
            style={{ width: 150, borderLeft: '#80808029 solid 1px' }}
            bordered={false}
            options={
              categories || [
                { value: null, label: 'All Categories' },
                { value: 'jack', label: 'Jack' },
                { value: 'lucy', label: 'Lucy' },
                { value: 'Yiminghe', label: 'yiminghe' },
              ]
            }
          />
        </Form.Item>
        <Form.Item style={{ margin: 0 }}>
          <Button type="primary" htmlType="submit">
            Cari
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
