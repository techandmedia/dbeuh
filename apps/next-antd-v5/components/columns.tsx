import { TableColumnsType } from 'antd';

export function remapColumns(): TableColumnsType {
  const columns: TableColumnsType = [
    {
      title: 'No',
      dataIndex: 'key',
      width: 40,
      fixed: 'left',
    },
    // {
    //   title: 'Kode Item',
    //   dataIndex: 'item_code',
    //   // key: ' item_code',
    //   width: 100,
    //   fixed: 'left',
    //   filters: [
    //     {
    //       text: 'Joe',
    //       value: 'Joe',
    //     },
    //     {
    //       text: 'John',
    //       value: 'John',
    //     },
    //   ],
    //   onFilter: (value, record: any) => record.name.indexOf(value) === 0,
    // },
    {
      title: 'Merk',
      dataIndex: 'brand_name',
      width: 100,
    },
    {
      title: 'Nama Item',
      dataIndex: 'item_name',
      width: 100,
    },
  ];

  return columns;
}
