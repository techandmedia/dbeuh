import { useEffect, useState } from 'react';
import { Button, Divider, Space, notification } from '@wsh4and/antd-v5';
import { Table } from '@wsh4and/antd-v5';
import { ISupabase, usePostSupabase } from '@wsh4and/utils';
import { remapColumns } from '../components/columns';

const PARAMS: ISupabase = {
  url: '/api/supabase',
  // Schema public sudah default, tidak perlu define
  data: {
    table: 'item',
    // select: '*',
    select: 'item_code, item_name',
    page: 1,
    size: 10,
  },
  // data: {
  //   schema: 'cst',
  //   table: 'address',
  //   select: '*',
  //   page: 1,
  //   size: DEFAULT_PAGESIZE,
  //   errorMessage: 'Hubungi admin untuk bantuan',
  // },
  // data: {
  //   schema: 'ksk',
  //   table: 'v_cart', // getting data from a 'view' table
  //   select: '*',
  //   page: 1,
  //   size: DEFAULT_PAGESIZE,
  //   errorMessage: 'Hubungi admin untuk bantuan',
  // },
};

export default function Index() {
  const columns = remapColumns();
  const [data, setData] = useState([]);
  const { dataTable, pagination, setTotal } = usePostSupabase(PARAMS);
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    if (dataTable.code === 200) {
      console.log('dataTable', dataTable);
      setData(dataTable.data);
      setTotal(dataTable.pagination.totalContent);
    }
    if (dataTable.code === 500) {
      console.log('dataTable', dataTable);
      setData(dataTable.data);
      const openNotification = () => {
        api.open({
          message: <strong>{dataTable.title}</strong>,
          description: (
            <>
              Hubungi Admin untuk bantuan, telah terjadi error:
              <br />
              <strong>{dataTable.message}</strong>
            </>
          ),
        });
      };

      openNotification();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataTable]);

  return (
    <>
      {contextHolder}
      <Space wrap>
        <h1>TES</h1>;<Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
      </Space>
      <br />
      <Divider type="horizontal" style={{ color: 'orange', fontSize: 10 }} />
      <Table
        columns={columns}
        dataSource={data}
        bordered
        // scrolly={200}
        scrollx={300}
        loading={dataTable.loading}
        pagination={pagination}
      />
    </>
  );
}
