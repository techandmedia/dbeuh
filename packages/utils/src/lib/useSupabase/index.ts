import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { PaginationProps } from 'antd';
import {
  IDataResponse,
  IPagination,
  ISupabase,
  responseDefault,
} from '../types';
import { validatePagination } from '../table-utils';

export function supabaseClient(options?: any) {
  return createClient(
    process.env['NX_SUPABASE_URL'] || '',
    process.env['NX_SUPABASE_ANON_KEY'] || '',
    options
  );
}

async function postSupa(options: ISupabase): Promise<IDataResponse> {
  const supabase = supabaseClient(options);
  const { table, select, page, size } = options;
  const firstIndex = page * size - size;
  const secondIndex = page * size - 1;

  const [countResponse, dataResponse] = await Promise.all([
    supabase
      .from(table)
      .select(select, { count: 'exact', head: true })
      .range(firstIndex, secondIndex),
    supabase.from(table).select(select).range(firstIndex, secondIndex),
  ]);

  const countError = countResponse.error;
  const dataError = dataResponse.error;
  const count = countResponse.count;
  const data = dataResponse.data;

  if (countError || dataError) {
    const error = countError || dataError;
    return {
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
    defaultCurrent: INITIAL_OPTIONS?.page,
    defaultPageSize: INITIAL_OPTIONS?.size,
    onChange: (page, pageSize) => {
      const newOptions = {
        ...INITIAL_OPTIONS,
        page,
        size: pageSize || 0,
      };
      postData(newOptions);
    },
    onShowSizeChange: (current, size) => {
      const newOptions = {
        ...INITIAL_OPTIONS,
        page: current,
        size: size,
      };
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
      setPagination((p) => ({ ...p, current: OPTIONS.page }));
      const data = await postSupa(OPTIONS);
      setPagination((p) => ({
        ...p,
        total: data.pagination?.totalContent || 0,
      }));
      setData(data);
    } catch (error) {
      const newError = error as IDataResponse;
      setData(newError);
    }
  }

  useEffect(() => {
    postData(INITIAL_OPTIONS);
  }, []);

  return [data, pagination, postData] as const;
}
