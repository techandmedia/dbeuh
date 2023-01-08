import { TableColumnsType } from 'antd';

export function remapColumns(): TableColumnsType {
  const columns: TableColumnsType = [
    {
      title: 'No',
      dataIndex: 'key',
      key: 'key',
      width: 80,
      fixed: 'left',
    },
    {
      title: 'Kode Item',
      dataIndex: 'item_code',
      // key: ' item_code',
      width: 100,
      fixed: 'left',
      filters: [
        {
          text: 'Joe',
          value: 'Joe',
        },
        {
          text: 'John',
          value: 'John',
        },
      ],
      onFilter: (value, record: any) => record.name.indexOf(value) === 0,
    },
    {
      title: 'Nama Item',
      dataIndex: 'item_name',
      width: 100,
      fixed: 'left',
      filters: [
        {
          text: 'Joe',
          value: 'Joe',
        },
        {
          text: 'John',
          value: 'John',
        },
      ],
      onFilter: (value, record: any) => record.name.indexOf(value) === 0,
    },
  ];

  return columns;
}
