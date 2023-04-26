/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { IDataResponse, IPagination } from './types';
import { validateData } from './helper';

// This is v2 for supabase client options
export interface ISupabase {
  db: {
    schema?: string;
    table: string;
    select: string;
    page: number;
    pageSize: number;
  };
  options?: {
    message?: string;
  };
  client?: {
    supabaseUrl: string;
    supabaseKey: string;
  };
}

export function supabaseClient(options?: ISupabase) {
  return createClient(
    process.env['NX_SUPABASE_URL'] || process.env['NEXT_PUBLIC_SUPABASE_URL'] || options?.client?.supabaseUrl || '',
    process.env['NX_SUPABASE_ANON_KEY'] ||
      process.env['NEXT_PUBLIC_SUPABASE_ANON_KEY'] ||
      options?.client?.supabaseKey ||
      '',
    options
  );
}

async function postSupa(options: ISupabase): Promise<IDataResponse> {
  const supabase = supabaseClient(options);
  const { table, select, page, pageSize } = options.db;
  const firstIndex = page * pageSize - pageSize;
  const secondIndex = page * pageSize - 1;

  const [countResponse, dataResponse] = await Promise.all([
    supabase.from(table).select(select, { count: 'exact', head: true }).range(firstIndex, secondIndex),
    supabase.from(table).select(select).range(firstIndex, secondIndex),
  ]);

  const countError = countResponse.error;
  const dataError = dataResponse.error;
  const count = countResponse.count;
  const data = dataResponse.data;

  if (countError || dataError) {
    const error = countError || dataError;
    return {
      statusCode: 500,
      title: 'ERROR',
      message: `Error Code: ${error?.code} - ${error?.message}.`,
      isLoading: false,
      data: null,
    };
  }

  const pagination: IPagination = {
    currentPage: page,
    pageSize: pageSize,
    totalItems: count,
  };
  const withPagination = validateData({ data: { data, pagination } });

  return {
    statusCode: 200,
    title: 'OK',
    isLoading: false,
    data: withPagination,
    message: 'Success',
    pagination,
  };
}

export function usePostSupabase<T = unknown>(INITIAL_OPTIONS: ISupabase) {
  const [dataResponse, setDataResponse] = useState<IDataResponse<T>>({
    data: null,
    statusCode: null,
    isLoading: true,
  });

  async function postData(supaOptions: ISupabase) {
    try {
      setDataResponse({
        data: null,
        statusCode: null,
        isLoading: true,
        message: supaOptions.options?.message || 'Loading...',
      });
      const data = await postSupa(supaOptions);
      // console.log('data', data);
      // @ts-ignore
      setDataResponse(data);
    } catch (error) {
      const newError = error as IDataResponse;
      console.log('error', newError);
      // @ts-ignore
      setDataResponse(newError);
    } finally {
      setDataResponse((d) => ({ ...d, isLoading: false }));
    }
  }

  useEffect(() => {
    postData(INITIAL_OPTIONS);
  }, []);

  return [dataResponse, postData] as const;
}
