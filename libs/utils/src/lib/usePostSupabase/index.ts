/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { AxiosRequestConfig } from 'axios';
import { usePostData } from '../usePostData';
import { PaginationProps } from '@wsh4and/antd-v5';

export interface ISupabase extends AxiosRequestConfig {
  data: {
    schema?: string;
    table: string;
    select: string;
    page: number;
    size: number;
  };
}

export function usePostSupabase(INITIAL_OPTIONS?: ISupabase) {
  const [total, setTotal] = useState(0);
  const [dataTable, getTableData] = usePostData(INITIAL_OPTIONS);

  const pagination: PaginationProps = {
    total: total,
    defaultCurrent: INITIAL_OPTIONS?.data.page,
    defaultPageSize: INITIAL_OPTIONS?.data.size,
    onChange: (page, pageSize) => {
      // console.log(page, pageSize);
      getTableData({
        ...INITIAL_OPTIONS,
        data: { ...INITIAL_OPTIONS?.data, page: page, size: pageSize },
      });
    },
    onShowSizeChange: (current, size) => {
      // console.log(current, size);
      getTableData({
        ...INITIAL_OPTIONS,
        data: { ...INITIAL_OPTIONS?.data, defaultCurrent: current, size: size },
      });
    },
  };

  return { dataTable, pagination, total, setTotal };
}
