/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { IDataResponse, IPagination } from './types';
import { validateData } from './helper';

export interface AxiosConfig extends AxiosRequestConfig {
  options?: {
    useLocal?: boolean;
    useEncryption?: boolean;
  };
}

export function usePostData<T = unknown, P = IPagination>(INITIAL_OPTIONS: AxiosConfig) {
  const [dataResponse, setDataResponse] = useState<IDataResponse<T, P>>({
    data: null,
    statusCode: null,
    isLoading: true,
  });
  const [options, setOptions] = useState<AxiosConfig>({
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  function post(axiosConfig: AxiosConfig): void {
    setOptions((opt) => ({ ...opt, ...axiosConfig }));
  }

  async function postData(PARAMS: AxiosConfig) {
    try {
      const token = localStorage.getItem('jwt');
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      if (PARAMS.options?.useLocal) {
        const storageKey = `data:${PARAMS.url}`;
        const storageData = localStorage.getItem(storageKey);

        if (storageData) {
          const response = JSON.parse(storageData);
          setDataResponse({
            data: validateData(response.data) as T,
            statusCode: response.statusCode,
            isLoading: false,
            title: response.title,
            message: response.message,
            pagination: response.pagination,
          });

          return;
        }
      }

      const config: AxiosRequestConfig = { headers, ...PARAMS };
      // console.log('config', config);
      const response = await axios.request<IDataResponse<T, P>>(config);
      // console.log('response', response);

      setDataResponse({
        data: validateData(response) as T,
        statusCode: response.data.statusCode,
        isLoading: false,
        title: response.data.title,
        message: response.data.message,
        pagination: response.data.pagination,
      });

      if (PARAMS.options?.useLocal) {
        const storageKey = `data:${PARAMS.url}`;
        localStorage.setItem(storageKey, JSON.stringify(response.data));
      }
    } catch (err) {
      const error = err as AxiosError;
      setDataResponse({
        data: null,
        statusCode: error.response ? error.response.status : null,
        isLoading: false,
        title: error.response ? error.response.statusText : error.message,
        message: error.message,
      });
    } finally {
      setDataResponse((d) => ({ ...d, isLoading: false }));
    }
  }

  useEffect(() => {
    setOptions((opt) => ({
      ...opt,
      ...INITIAL_OPTIONS,
      baseURL:
        INITIAL_OPTIONS?.baseURL ||
        process.env['NX_NEXT_BASE_URL'] ||
        process.env['NEXT_BASE_URL'] ||
        process.env.BASE_URL,
    }));
  }, []);

  useEffect(() => {
    if (options.url && options.url !== '') {
      setDataResponse({
        data: null,
        statusCode: null,
        isLoading: true,
      });
      postData(options);
    }
  }, [options.url, options.data]);

  return [dataResponse, post] as const;
}
