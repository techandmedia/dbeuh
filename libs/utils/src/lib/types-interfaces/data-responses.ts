interface IPagination {
  page: number;
  size: number;
  totalContent: number;
}

export interface IDataResponse {
  data?: never[] | null;
  code: number;
  title?: string;
  message: string;
  pagination?: IPagination;
}
