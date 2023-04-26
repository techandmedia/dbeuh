export interface IPagination {
  currentPage: number;
  pageSize: number;
  totalItems: number | null;
}

export interface IDataResponse<T = unknown, P = IPagination> {
  data: T | null;
  statusCode?: number | null;
  isLoading?: boolean;
  title?: string;
  message?: string;
  pagination?: P;
}
