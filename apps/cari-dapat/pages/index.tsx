import { useEffect } from 'react';
import { Button, Divider, Space, TableColumnsType } from 'antd';
import { Table } from '../components/table/table';
import { ISupabase, usePostSupabase } from '../utils/usePostSupabase';

const PARAMS: ISupabase = {
  // Schema public sudah default, tidak perlu define
  data: {
    table: 'category',
    select: '*',
    // select: 'item_code, item_name',
    page: 1,
    size: 5,
  },
};

const PARAMS2: ISupabase = {
  data: {
    schema: 'ksk',
    table: 'v_cart', // getting data from a 'view' table
    select: '*',
    page: 1,
    size: 10,
  },
};

export function remapColumns(): TableColumnsType {
  const columns: TableColumnsType = [
    {
      title: 'No',
      dataIndex: 'key',
      width: 40,
      fixed: 'left',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      width: 100,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      width: 100,
    },
  ];

  return columns;
}

export default function Page() {
  const columns = remapColumns();
  const [category, pagination, getCategory] = usePostSupabase(PARAMS);

  useEffect(() => {
    console.log(category);
  }, [category]);

  return (
    <>
      List Kategori Produk
      {/* <Notification response={category} /> */}
      <Space wrap>
        <Button
          type="default"
          onClick={() => {
            getCategory({ ...PARAMS, data: { ...PARAMS.data, page: 1 } });
          }}
        >
          Refresh Data at 1st page
        </Button>
        <Button
          type="primary"
          onClick={() =>
            getCategory({
              ...PARAMS,
              data: { ...PARAMS.data, page: pagination.current },
            })
          }
        >
          Refresh Data at current page
        </Button>
      </Space>
      <br />
      <Divider type="horizontal" style={{ color: 'orange', fontSize: 10 }} />
      <Table
        columns={columns}
        dataSource={category.data}
        bordered
        // scrolly={200}
        scrollx={300}
        loading={category.loading}
        pagination={pagination}
        rowKey="key"
      />
      <Divider type="horizontal" style={{ color: 'orange', fontSize: 10 }} />{' '}
      <Space wrap>
        <Button
          type="default"
          onClick={() => {
            getCategory({ ...PARAMS2, data: { ...PARAMS2.data, page: 1 } });
          }}
        >
          Refresh Data at 1st page
        </Button>
        <Button
          type="primary"
          onClick={() =>
            getCategory({
              ...PARAMS2,
              data: { ...PARAMS2.data, page: pagination.current },
            })
          }
        >
          Refresh Data at current page
        </Button>
      </Space>
      <br />
      <Table
        columns={columns}
        dataSource={category.data}
        bordered
        // scrolly={200}
        scrollx={300}
        loading={category.loading}
        pagination={pagination}
        rowKey="key"
      />
    </>
  );
}
