/* eslint-disable @typescript-eslint/no-explicit-any */
import { IDataResponse, TData } from '../usePostData';

export function validatePagination(data: IDataResponse): TData {
  if (Array.isArray(data.data) && data.data.length > 0) {
    /**
     * Adding number when user change page
     * Without this algo, row number will be the same for each page: 1-10 (if the page size is 10)
     */
    const numberAddition = data.pagination?.page ? data.pagination.page * 10 - 10 : 0;
    const newData: any[] = data.data.map((d: any, index: number) => {
      const key = { key: index + 1 + numberAddition };
      return { ...key, ...d };
    });

    return newData;
  }

  return data.data;
}
