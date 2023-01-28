/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { deHashPayload, hashPayload, validatePagination } from '@wsh4and/utils';
import { supabaseClient } from '../../../next-antd-v5/utils';

import type { NextApiRequest, NextApiResponse } from 'next';

interface IPagination {
  page: number;
  size: number;
  totalContent: number;
}

interface IData {
  data: any[] | any;
  code: number;
  title: string;
  message: string;
  pagination?: IPagination;
}

function checkHashEnvironment(data: any) {
  if (process.env['NODE_ENV'] === 'production') {
    return hashPayload(data);
  }

  return data;
}

function checkDeHashEnvironment(data: any) {
  if (process.env['NODE_ENV'] === 'production') {
    return deHashPayload(data);
  }

  return data;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<IData>) {
  const { token, schema, table, select, page, size } = checkDeHashEnvironment(req.body);

  try {
    const options = {
      schema: schema || 'public',
      // global: {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      // },
    };
    console.log('options', options);
    console.log('req.body', schema, table, select, page, size);
    const supabase = supabaseClient(options);
    const firstIndex = page * size - size;
    const secondIndex = page * size - 1;
    const { count, error: errorCount } = await supabase
      .from(table)
      .select(select, { count: 'exact', head: true })
      .range(firstIndex, secondIndex);

    const { data, error: errorData } = await supabase
      .from(table)
      .select(select)
      .range(firstIndex, secondIndex);

    console.log('req.count==========', count);
    console.log('req.data==========', data);
    console.log('req.errorCount==========', errorCount);
    console.log('req.error==========', errorData);

    // How to handle error "error Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client"
    // Use conditional to prevent the code keeps running and sending a null data
    // The reason is when error it shouldnt send another response and should be close
    if (errorCount || errorData) {
      console.log('errorCount', errorCount, errorData);
      const code = errorCount.code || errorData.code || 500;
      const message = errorCount.message || errorData.message || '';
      res.status(500).json({
        code: 500,
        title: `ERROR: ${code}`,
        message: checkHashEnvironment(message),
        data: null,
      });
    } else {
      // validatePagination is important as it create a 'row' key which is important
      // for the table so it doesnt produce the error 'missing key'
      const pagination = {
        page: page,
        size: size,
        totalContent: count,
      };
      const withPagination = validatePagination({
        data: data,
        pagination: pagination,
      });
      const hashedData = checkHashEnvironment(withPagination);
      res.status(200).json({
        code: 200,
        title: 'OK',
        message: 'Sending Data',
        data: hashedData,
        pagination: pagination,
      });
    }
  } catch (error) {
    console.log('error==============', error);
    res.status(500).json({
      code: 500,
      title: 'ERROR',
      message: checkHashEnvironment(error.message),
      data: null,
    });
  }
}
