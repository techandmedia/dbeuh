import { IDataResponse } from '../types';

export function validatePagination(data: IDataResponse | any): any | null {
  if (Array.isArray(data.data) && data.data.length > 0) {
    /**
     * Adding number when user change page
     * Without this algo, row number will be the same for each page: 1-10 (if the page size is 10)
     */
    const numberAddition = data.pagination?.page
      ? data.pagination.page * data.pagination.size - data.pagination.size
      : 0;
    const newData: any[] = data.data.map((d: any, index: number) => {
      const key = { key: index + 1 + numberAddition };
      return { ...key, ...d };
    });

    return newData;
  }

  return data.data;
}
