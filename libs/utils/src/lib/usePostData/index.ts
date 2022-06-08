/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { IDataResponse } from '../types-interfaces';

export function usePostData(INITIAL_OPTIONS?: AxiosRequestConfig) {
  // const [data, setData] = useState<any | null>(null);
  /**
   * If one of this error occured?
   * Argument of type 'IDataResponse | ((OPTIONS: AxiosRequestConfig<any>) => void)' is not assignable to parameter of type 'IDataResponse'.
   * Property 'pagination' does not exist on type '(OPTIONS: AxiosRequestConfig<any>) => void'
   * Make sure to add as const when returning something
   */
  const [data, setData] = useState<IDataResponse | null>(null);

  async function postData(PARAMS: AxiosRequestConfig) {
    const OPTIONS: AxiosRequestConfig = {
      ...PARAMS,
      method: 'POST',
    };
    try {
      const res = await axios(OPTIONS);
      console.log('usePostData', res);
      setData(res.data);
    } catch (error) {
      console.log(error);
      // https://github.com/axios/axios/issues/3612#issuecomment-1046542497
      const errors = error as Error | AxiosError;
      console.log(errors);

      if (!axios.isAxiosError(error)) {
        // do whatever you want with native error
      }
      // do what you want with your axios error
      setData({ code: 500, message: errors.message, title: 'ERROR' });
    }
  }

  function post(OPTIONS: AxiosRequestConfig): void {
    setData(null);
    postData(OPTIONS);
  }

  useEffect(() => {
    console.log(INITIAL_OPTIONS);
    if (INITIAL_OPTIONS?.url) {
      postData(INITIAL_OPTIONS);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [data, post] as const;
  // If no const here, it will have an error
  // return [data, post];
}
