import { useEffect } from 'react';
import { Button, Space, TableColumnsType } from 'antd';
import { ISupabase, usePostSupabase } from '@wsh4and/utils';
import { Notification, Table } from '@wsh4and/antd';

const PARAMS: ISupabase = {
  // Schema public sudah default, tidak perlu define
  db: {
    table: 'brand',
    select: '*',
    // select: 'item_code, item_name',
    page: 1,
    pageSize: 5,
  },
};

const PARAMS2: ISupabase = {
  db: {
    schema: 'ksk',
    table: 'v_cart', // getting data from a 'view' table
    select: '*',
    page: 1,
    pageSize: 10,
  },
};

interface IBrand {
  id: number;
  brand_name: string;
  brand_code: string;
}

export function remapColumns(): TableColumnsType {
  const columns: TableColumnsType<IBrand> = [
    {
      title: 'No',
      dataIndex: 'key',
      width: 40,
    },
    {
      title: 'Brand',
      dataIndex: 'brand_name',
      width: 80,
    },
    {
      title: 'Barang',
      dataIndex: 'item_name',
      width: 100,
    },
    {
      title: 'Harga Satuan',
      dataIndex: 'main_price_retail',
      width: 100,
    },
    {
      title: 'Jumlah',
      dataIndex: 'qty',
      width: 20,
    },
  ];

  return columns;
}

interface IVCart {
  key: number;
  brand_name: string;
  item_name: string;
  main_price_retail: string;
  qty: number;
}

export default function Page() {
  const columns = remapColumns();
  const [testData, getTestData] = usePostSupabase<IVCart[]>(PARAMS2);

  useEffect(() => {
    console.log('testData', testData);
  }, [testData]);

  return (
    <>
      <h1>Supabase Table Sample</h1>
      <Notification
        dataResponse={testData}
        successStyle={{ fontSize: 22 }}
        errorStyle={{ color: 'red', fontWeight: 'bolder' }}
      />
      <Space wrap>
        <Button
          type="default"
          onClick={() => {
            getTestData({ ...PARAMS2, db: { ...PARAMS2.db, page: 1 } });
          }}
        >
          Refresh Data at 1st page
        </Button>
        <Button
          type="primary"
          onClick={() => {
            getTestData({ ...PARAMS2, db: { ...PARAMS2.db, page: testData.pagination?.currentPage ?? 1 } });
          }}
        >
          Refresh Data at current page
        </Button>
      </Space>
      <Table params={PARAMS2} dataResponse={testData} columns={columns} getData={getTestData} />
    </>
  );
}
