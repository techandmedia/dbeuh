import { render } from '@testing-library/react';
import { TableColumnsType } from 'antd';

import { Table } from './table';
function remapColumns(): TableColumnsType {
  const columns: TableColumnsType = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
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
      title: 'Other',
      children: [
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
          width: 150,
          sorter: (a: any, b: any) => a.age - b.age,
        },
        {
          title: 'Address',
          children: [
            {
              title: 'Street',
              dataIndex: 'street',
              key: 'street',
              width: 150,
            },
            {
              title: 'Block',
              children: [
                {
                  title: 'Building',
                  dataIndex: 'building',
                  key: 'building',
                  width: 100,
                },
                {
                  title: 'Door No.',
                  dataIndex: 'number',
                  key: 'number',
                  width: 100,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'Company',
      children: [
        {
          title: 'Company Address',
          dataIndex: 'companyAddress',
          key: 'companyAddress',
          width: 200,
        },
        {
          title: 'Company Name',
          dataIndex: 'companyName',
          key: 'companyName',
          width: 200,
        },
      ],
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
      width: 80,
      fixed: 'right',
    },
  ];
  return columns;
}

const data = [];
for (let i = 0; i < 10; i++) {
  data.push({
    key: i,
    name: 'John Brown',
    age: i + 1,
    street: 'Lake Park',
    building: 'C',
    number: 2035,
    companyAddress: 'Lake Street 42',
    companyName: 'SoftLake Co',
    gender: 'M',
  });
}

describe('Table', () => {
  it('should render successfully', () => {
    const columns = remapColumns();
    const { baseElement } = render(<Table columns={columns} dataSource={data} />);
    expect(baseElement).toBeTruthy();
  });
});
