import { TableColumnsType } from 'antd';
import { ISupabase, usePostSupabase } from '../utils/usePostSupabase';
import { useEffect } from 'react';

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
  const [response, pagination, getDataCoba] = usePostSupabase(PARAMS);

  useEffect(() => {
    console.log(response);
  }, [response]);

  return (
    <div>
      List Kategori Produk
      <ul>
        {response.code === 200 &&
          response.data.map(category => <li key={category.id}>{category.name}</li>)}
      </ul>
    </div>
  );
}
