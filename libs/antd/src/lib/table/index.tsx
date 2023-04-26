/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table, TablePaginationConfig } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { IDataResponse } from 'libs/utils/src/lib/types';

interface IColumn<T> {
  title: string;
  dataIndex: keyof T;
}

interface ITableDataResponse extends IDataResponse {
  data: any[] | undefined;
}

interface ITableParams {
  db?: {
    page?: number;
    pageSize?: number;
  };
  data?: {
    page?: number;
    pageSize?: number;
  };
}

interface CustomTableProps<T> {
  params: ITableParams;
  dataResponse: ITableDataResponse;
  columns: ColumnsType<IColumn<T>>;
  getData: (params: ITableParams) => void;
}

function CustomTable<T>({ params, dataResponse, columns, getData }: CustomTableProps<T>) {
  const handlePageChange = (page: TablePaginationConfig) => {
    getData({
      ...params,
      db: {
        ...params.db,
        page: page.current,
        pageSize: page.pageSize,
      },
      data: {
        ...params.data,
        page: page.current,
        pageSize: page.pageSize,
      },
    });
  };

  return (
    <Table
      rowKey="key"
      columns={columns}
      dataSource={dataResponse.data}
      bordered
      // scrolly={200}
      // scrollx={300}
      loading={dataResponse.isLoading}
      pagination={{
        current: dataResponse.pagination?.currentPage ?? 1,
        total: dataResponse.pagination?.totalItems ?? 0,
        pageSize: dataResponse.pagination?.pageSize ?? 10,
        showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
      }}
      onChange={handlePageChange}
    />
  );
}

export { CustomTable as Table };
