import { AxiosConfig, usePostData } from '@wsh4and/utils';
import { useEffect } from 'react';
import { Button, Divider, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';

interface IUser {
  id: number;
  name: string;
  email: string;
}
const columns: ColumnsType<IUser> = [
  {
    title: 'Nomor',
    dataIndex: 'key',
    key: 'key',
  },
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
];
const options: AxiosConfig = {
  url: 'api/table',
  // If data is empty, then it will use default page and pagesize from the handler
  data: {
    page: 2,
    pageSize: 15,
  },
  options: {
    useLocal: false,
    useEncryption: false,
  },
};
const simple: AxiosConfig = {
  url: 'api/sample',
};

export default function Index() {
  const [data] = usePostData<string>(simple);
  const [dataTable, getDataTable] = usePostData<IUser[]>(options);

  function getCustomDataTable(currentPage) {
    getDataTable({
      ...options,
      data: { ...options.data, page: currentPage, pageSize: dataTable.pagination?.pageSize },
    });
  }

  useEffect(() => {
    if (data.data) {
      // console.log('data', data);
    }
  }, [data]);

  useEffect(() => {
    if (dataTable.data) {
      // console.log('dataTable', dataTable);
      // dataTable.data.map((item) => {
      //   console.log('item', item);
      // });
    }
  }, [dataTable]);

  return (
    <div>
      OK
      <br />
      {data.data}
      <Divider />
      <Button
        disabled={dataTable.pagination?.currentPage === 1}
        onClick={() => {
          getCustomDataTable(dataTable.pagination.currentPage - 1);
        }}
      >
        Previous Page
      </Button>
      <Button
        onClick={() => {
          getCustomDataTable(dataTable.pagination.currentPage + 1);
        }}
      >
        Next Page
      </Button>
      <Divider />
      <Table
        columns={columns}
        dataSource={dataTable.data}
        loading={dataTable.isLoading}
        pagination={{
          current: dataTable.pagination?.currentPage === 1 ? 1 : dataTable.pagination?.currentPage,
          total: dataTable.pagination?.totalItems,
          pageSize: dataTable.pagination?.pageSize,
          showTotal: (total, range) => {
            return `${range[0]}-${range[1]} of ${total} items`;
          },
        }}
        onChange={(page) => {
          getDataTable({
            ...options,
            data: {
              ...options.data,
              page: page.current,
              pageSize: page.pageSize,
            },
          });
        }}
      />
    </div>
  );
}
