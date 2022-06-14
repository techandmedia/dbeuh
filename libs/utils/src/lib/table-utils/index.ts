import { IDataResponse } from '../usePostData';

export function validatePagination(dataTable: IDataResponse): any[] | null {
  if (Array.isArray(dataTable.data) && dataTable.data.length > 0) {
    /**
     * Adding number when user change page
     * Without this algo, row number will be the same for each page: 1-10 (if the page size is 10)
     */
    const numberAddition = dataTable.pagination?.page ? dataTable.pagination.page * 10 - 10 : 0;
    const data: any[] = dataTable.data.map((data: any, index: number) => {
      const key = { key: index + 1 + numberAddition };
      return { ...key, ...data };
    });

    return data;
  }

  return null;
}
