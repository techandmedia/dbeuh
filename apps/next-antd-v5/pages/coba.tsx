/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Divider, Space, Notification } from '@wsh4and/antd-v5';
import { Table } from '@wsh4and/antd-v5';
import { ISupabase, usePostSupabase } from '@wsh4and/utils';
import { useEffect } from 'react';
import { remapColumns } from '../components/columns';

const PARAMS: ISupabase = {
  // Schema public sudah default, tidak perlu define
  data: {
    table: 'brand',
    select: '*',
    // select: 'item_code, item_name',
    page: 1,
    size: 5,
  },
  // data: {
  //   schema: 'cst',
  //   table: 'address',
  //   select: '*',
  //   page: 1,
  //   size: 5,
  // },
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

export default function Index(props) {
  const columns = remapColumns();
  const [response, pagination, getDataCoba] = usePostSupabase(PARAMS);
  const [response2, pagination2, getDataCoba2] = usePostSupabase(PARAMS2);

  // useEffect(() => {
  //   console.log('pagination==========', pagination);
  // }, [pagination]);

  useEffect(() => {
    console.log('response==========', response.data);
  }, [response.data]);

  useEffect(() => {
    console.log('response2==========', response2.data);
  }, [response2.data]);

  return (
    <>
      <Notification response={response} />
      <Space wrap>
        <Button
          type="default"
          onClick={() => {
            getDataCoba({ ...PARAMS, data: { ...PARAMS.data, page: 1 } });
          }}
        >
          Refresh Data at 1st page
        </Button>
        <Button
          type="primary"
          onClick={() =>
            getDataCoba({
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
        dataSource={response.data}
        bordered
        // scrolly={200}
        scrollx={300}
        loading={response.loading}
        pagination={pagination}
        rowKey="key"
      />
      <Divider type="horizontal" style={{ color: 'orange', fontSize: 10 }} />{' '}
      <Space wrap>
        <Button
          type="default"
          onClick={() => {
            getDataCoba2({ ...PARAMS2, data: { ...PARAMS2.data, page: 1 } });
          }}
        >
          Refresh Data at 1st page
        </Button>
        <Button
          type="primary"
          onClick={() =>
            getDataCoba2({
              ...PARAMS2,
              data: { ...PARAMS2.data, page: pagination2.current },
            })
          }
        >
          Refresh Data at current page
        </Button>
      </Space>
      <br />
      <Table
        columns={columns}
        dataSource={response2.data}
        bordered
        // scrolly={200}
        scrollx={300}
        loading={response2.loading}
        pagination={pagination2}
        rowKey="key"
      />
    </>
  );
}
