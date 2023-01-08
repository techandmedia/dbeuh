import { useEffect, useState } from 'react';
import { AxiosRequestConfig } from 'axios';
import { Button, Divider, PaginationProps, Space, notification } from '@wsh4and/antd-v5';
import { Table } from '@wsh4and/antd-v5';
import { usePostData } from '@wsh4and/utils';
import { remapColumns } from '../components/columns';

export default function Index() {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const columns = remapColumns();
  const DEFAULT_PAGESIZE = 10;
  const PARAMS: AxiosRequestConfig = {
    url: '/api/supabase',
    // Schema public sudah default, tidak perlu define
    data: {
      table: 'item',
      // select: '*',
      select: 'item_code, item_name',
      page: 1,
      size: DEFAULT_PAGESIZE,
      errorMessage: 'Hubungi admin untuk bantuan',
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
  const [dataTable, getTableData] = usePostData(PARAMS);
  const [api, contextHolder] = notification.useNotification();

  const pagination: PaginationProps = {
    total: total,
    defaultCurrent: 1,
    defaultPageSize: DEFAULT_PAGESIZE,
    onChange: (page, pageSize) => {
      // console.log(page, pageSize);
      getTableData({ ...PARAMS, data: { ...PARAMS.data, page: page, size: pageSize } });
    },
    onShowSizeChange: (current, size) => {
      // console.log(current, size);
      getTableData({ ...PARAMS, data: { ...PARAMS.data, defaultCurrent: current, size: size } });
    },
  };

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
