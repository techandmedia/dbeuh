export interface IPagination {
  page: number;
  size: number;
  totalContent: number | null | undefined;
}

export type TData = string[] | number[] | string | number | Record<string, unknown> | null;

export interface IDataResponse {
  data: any | null;
  code: number | null | undefined;
  loading?: boolean;
  title?: string;
  message?: string;
  pagination?: IPagination;
}

export interface ISupabase {
  data?: {
    schema?: string;
    table: string;
    select: string;
    page: number;
    size: number;
  };
}

export const responseDefault: IDataResponse = {
  code: null,
  data: null,
  loading: true,
};
