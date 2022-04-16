/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

export function usePostData(INITIAL_OPTIONS?: AxiosRequestConfig) {
  const [data, setData] = useState<any | null>(null);

  async function postData(PARAMS: AxiosRequestConfig) {
    const OPTIONS: AxiosRequestConfig = {
      ...PARAMS,
      method: 'POST',
    };
    try {
      const res = await axios(OPTIONS);
      console.log(res);
      setData(res.data);
    } catch (error) {
      console.log(error);
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

  return [data, post];
}
