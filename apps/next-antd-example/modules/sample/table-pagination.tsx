/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { PaginationProps } from 'antd';
import { AxiosRequestConfig } from 'axios';

// Shared Libraries
import { Table } from '@dbeuh/antd';
import { usePostData } from '@wsh4and/utils';

// Local Libraries
import { remapColumns } from './columns';
import DescriptionTablePagination from './table-pagination-description';

export default function Page(props) {
  const columns = remapColumns();
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const DEFAULT_PAGESIZE = 10;
  const PARAMS: AxiosRequestConfig = {
    url: '/api/table',
    data: { page: 1, size: DEFAULT_PAGESIZE },
  };
  const [dataTable, getTableData] = usePostData(PARAMS);

  const pagination: PaginationProps = {
    total: total,
    defaultCurrent: 1,
    defaultPageSize: DEFAULT_PAGESIZE,
    onChange: (page, pageSize) => {
      // console.log(page, pageSize);
      getTableData({ ...PARAMS, data: { ...PARAMS.data, page: page, size: pageSize } });
    },
    onShowSizeChange: (current: number, size: number) => {
      // console.log(current, size);
      getTableData({ ...PARAMS, data: { ...PARAMS.data, defaultCurrent: current, size: size } });
    },
  };

  useEffect(() => {
    console.log(dataTable);
    if (dataTable?.code) {
      setTimeout(() => {
        setLoading(false);
        setData(dataTable.data.tableData);
        setTotal(dataTable.data.totalContent);
      }, 200);
    } else {
      setLoading(true);
    }
  }, [dataTable]);

  return (
    <>
      {/* <DescriptionTablePagination /> */}
      <Table
        columns={columns}
        dataSource={data}
        bordered
        scrolly={200}
        // scrollx={600}
        loading={loading}
        pagination={pagination}
      />
    </>
  );
}
