/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { PaginationProps } from '@wsh4and/antd-v5';
import { IDataResponse, responseDefault } from '../usePostData';
import { createClient } from '@supabase/supabase-js';
import { validatePagination } from '../table-utils';

export interface ISupabase {
  type: 'auth' | 'data' | 'count';
  data?: {
    schema?: string;
    table: string;
    select: string;
    page: number;
    size: number;
  };
}

function supabaseClient(options?: any) {
  return createClient(
    process.env['NX_SUPABASE_URL'] || '',
    process.env['NX_SUPABASE_ANON_KEY'] || '',
    options
  );
}
// process.env.NX_SUPABASE_ANON_KEY
// process.env.NX_SUPABASE_SERVICE_ROLE_KEY,

async function postSupa(options: ISupabase) {
  const supabase = supabaseClient(options.data);
  // @ts-ignore
  const { page, size } = options.data;
  const firstIndex = page * size - size;
  const secondIndex = page * size - 1;

  // @ts-ignore
  const { table, select } = options.data;
  if (options.type === 'count') {
    // Do not count if the page is 1 to save bandwith
    const { count, error } = await supabase
      .from(table)
      .select(select, { count: 'exact', head: true })
      .range(firstIndex, secondIndex);
    if (error) {
      // eslint-disable-next-line no-throw-literal
      throw {
        code: 500,
        title: 'ERROR',
        message: `Error Code: ${error.code} - ${error.message}.`,
        loading: false,
        data: null,
      };
    }

    return { code: 200, title: 'OK', loading: false, data: count, message: 'Success' };
  }

  const { data, error } = await supabase.from(table).select(select).range(firstIndex, secondIndex);

  if (error) {
    // eslint-disable-next-line no-throw-literal
    throw {
      code: 500,
      title: 'ERROR',
      message: `Error Code: ${error.code} - ${error.message}.`,
      loading: false,
      data: null,
    };
  }

  const withPagination = validatePagination({
    data: data,
    pagination: {
      page: page,
      size: size,
    },
  });

  return { code: 200, title: 'OK', loading: false, data: withPagination, message: 'Success' };
}

export function usePostSupabase(INITIAL_OPTIONS: ISupabase) {
  const [data, setData] = useState<IDataResponse>(responseDefault);
  const [total, setTotal] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(INITIAL_OPTIONS?.data?.page || 1);
  const [pagination, setPagination] = useState<PaginationProps>({
    total: total,
    current: currentPage,
    defaultCurrent: INITIAL_OPTIONS?.data?.page,
    defaultPageSize: INITIAL_OPTIONS?.data?.size,
    onChange: (page, pageSize) => {
      setCurrentPage(page);
      const newOptions = {
        ...INITIAL_OPTIONS,
        data: {
          ...INITIAL_OPTIONS.data,
          page,
          size: pageSize,
        },
      };
      // console.log('newOptions', newOptions);
      // @ts-ignore
      postData(newOptions);
    },
    onShowSizeChange: (current, size) => {
      setCurrentPage(current);
      const newOptions = {
        ...INITIAL_OPTIONS,
        data: {
          ...INITIAL_OPTIONS.data,
          page: current,
          size: size,
        },
      };
      // console.log('newOptions', newOptions);
      // @ts-ignore
      postData(newOptions);
    },
  });

  function resetDataResponse() {
    setData({
      code: null,
      data: null,
      loading: true,
    });
  }

  async function getTotal(options: ISupabase) {
    const data = await postSupa(options);
    if (data.code === 200) {
      setTotal(data.data);
    } else {
      setTotal(0);
    }
  }

  async function postData(OPTIONS: ISupabase) {
    try {
      resetDataResponse();
      // @ts-ignore
      setCurrentPage(OPTIONS.data?.page);
      // console.log('OPTIONS', OPTIONS);
      const data = await postSupa(OPTIONS);
      // console.log('data', data);
      setData({
        ...data,
      });
    } catch (error) {
      const newError = error as IDataResponse;
      // console.log('ernewErrorror', newError);
      setData({
        ...newError,
      });
    }
  }

  useEffect(() => {
    if (INITIAL_OPTIONS?.type === 'data') {
      // console.log(INITIAL_OPTIONS.data?.page, INITIAL_OPTIONS.data?.size);
      postData(INITIAL_OPTIONS);
    }

    const options: ISupabase = {
      ...INITIAL_OPTIONS,
      type: 'count',
    };
    getTotal(options);
  }, []);

  // useEffect(() => {
  //   console.log('pagination', pagination);
  // }, [pagination]);

  useEffect(() => {
    setPagination(p => ({ ...p, current: currentPage }));
  }, [currentPage]);

  return {
    postData,
    response: data,
    pagination: {
      ...pagination,
      total: total,
      current: currentPage,
    },
  };
}
