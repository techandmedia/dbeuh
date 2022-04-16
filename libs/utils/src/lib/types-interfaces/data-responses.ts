interface IPagination {
  page: number;
  size: number;
  totalContent: number;
}

export interface IDataResponse {
  data: any[];
  code: number;
  title: string;
  message: string;
  pagination?: IPagination;
}
