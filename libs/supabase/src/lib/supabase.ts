/* eslint-disable no-throw-literal */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { PaginationProps } from 'antd';
import {
  IDataResponse,
  IPagination,
  ISupabase,
  responseDefault,
} from 'libs/utils/src/lib/shared/interfaces-types';
import { validatePagination } from 'libs/utils/src/lib/table-utils';

export function supabaseClient(options?: any) {
  return createClient(
    process.env['NX_SUPABASE_URL'] || '',
    process.env['NX_SUPABASE_ANON_KEY'] || '',
    options
  );
}

async function postSupa(options: ISupabase): Promise<IDataResponse> {
  const supabase = supabaseClient(options.data);
  // @ts-ignore
  const { table, select, page, size } = options.data;
  const firstIndex = page * size - size;
  const secondIndex = page * size - 1;

  const { count, error: countError } = await supabase
    .from(table)
    .select(select, { count: 'exact', head: true })
    .range(firstIndex, secondIndex);
  const { data, error: dataError } = await supabase
    .from(table)
    .select(select)
    .range(firstIndex, secondIndex);

  if (countError || dataError) {
    const error = countError || dataError;
    throw {
      code: 500,
      title: 'ERROR',
      message: `Error Code: ${error?.code} - ${error?.message}.`,
      loading: false,
      data: null,
    };
  }

  const pagination: IPagination = {
    page: page,
    size: size,
    totalContent: count,
  };
  const withPagination = validatePagination({
    data: data,
    pagination: pagination,
  });

  return {
    code: 200,
    title: 'OK',
    loading: false,
    data: withPagination,
    message: 'Success',
    pagination,
  };
}

export function usePostSupabase(INITIAL_OPTIONS: ISupabase) {
  const [data, setData] = useState<IDataResponse>(responseDefault);
  const [pagination, setPagination] = useState<PaginationProps>({
    total: 0,
    defaultCurrent: INITIAL_OPTIONS?.data?.page,
    defaultPageSize: INITIAL_OPTIONS?.data?.size,
    onChange: (page, pageSize) => {
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

  async function postData(OPTIONS: ISupabase) {
    try {
      resetDataResponse();
      // @ts-ignore
      setPagination(p => ({ ...p, current: OPTIONS.data?.page }));
      // console.log('OPTIONS', OPTIONS);
      const data = await postSupa(OPTIONS);
      // console.log('data', data);
      // @ts-ignore
      setPagination(p => ({ ...p, total: data.pagination?.totalContent }));
      setData(data);
    } catch (error) {
      const newError = error as IDataResponse;
      // console.log('ernewErrorror', newError);
      setData(newError);
    }
  }

  useEffect(() => {
    // console.log(INITIAL_OPTIONS.data?.page, INITIAL_OPTIONS.data?.size);
    postData(INITIAL_OPTIONS);
  }, []);

  return [data, pagination, postData] as const;
}
