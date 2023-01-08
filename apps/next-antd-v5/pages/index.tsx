import { useEffect, useState } from 'react';
import { Button, Divider, Space, Notification } from '@wsh4and/antd-v5';
import { Table } from '@wsh4and/antd-v5';
import { ISupabase, usePostSupabase } from '@wsh4and/utils';
import { remapColumns } from '../components/columns';

const PARAMS: ISupabase = {
  url: '/api/supabase',
  // Schema public sudah default, tidak perlu define
  // data: {
  //   table: 'item',
  //   // select: '*',
  //   select: 'item_code, item_name',
  //   page: 1,
  //   size: 15,
  // },
  // data: {
  //   schema: 'cst',
  //   table: 'address',
  //   select: '*',
  //   page: 1,
  //   size: 10,
  // },
  data: {
    schema: 'ksk',
    table: 'v_cart', // getting data from a 'view' table
    select: '*',
    page: 1,
    size: 20,
  },
};

export default function Index() {
  const columns = remapColumns();
  const { dataTable, pagination, setTotal } = usePostSupabase(PARAMS);

  useEffect(() => {
    if (dataTable.code === 200) {
      console.log('dataTable', dataTable);
      setTotal(dataTable.pagination.totalContent);
    } else {
      setTotal(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataTable]);

  return (
    <>
      <Notification data={dataTable} />
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
        dataSource={dataTable.data}
        bordered
        // scrolly={200}
        scrollx={300}
        loading={dataTable.loading}
        pagination={pagination}
      />
    </>
  );
}
