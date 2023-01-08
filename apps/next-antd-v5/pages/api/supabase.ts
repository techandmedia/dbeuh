/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
// import { supabase } from 'apps/next-antd-v5/utils';
import { createClient } from '@supabase/supabase-js';

import type { NextApiRequest, NextApiResponse } from 'next';

interface IPagination {
  page: number;
  size: number;
  totalContent: number;
}

interface IData {
  data: any[];
  code: number;
  title: string;
  message: string;
  pagination?: IPagination;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<IData>) {
  const { page, size } = req.body;
  console.log('req.body==========', req.body);

  try {
    const options = {
      schema: req.body.schema,
    };
    const supabase = createClient(
      process.env.NX_SUPABASE_URL,
      process.env.NX_SUPABASE_ANON_KEY,
      options
    );
    const { count, error: errorCount } = await supabase
      .from(req.body.table)
      .select(req.body.select, { count: 'exact', head: true });

    const firstIndex = req.body.page * req.body.size - req.body.size;
    const secondIndex = req.body.page * req.body.size - 1;
    const { data, error: errorData } = await supabase
      .from(req.body.table)
      .select(req.body.select)
      .range(firstIndex, secondIndex);

    // console.log('req.count==========', count);
    // console.log('req.data==========', data);
    // console.log('req.errorCount==========', errorCount);
    // console.log('req.error==========', errorData);

    if (errorCount || errorData) {
      const code = errorCount.code || errorData.code;
      const message = errorCount.message || errorData.message;
      res.status(500).json({
        code: 500,
        title: `ERROR: ${code}`,
        message: message,
        data: null,
      });
    }

    res.status(200).json({
      code: 200,
      title: 'OK',
      message: 'Sending Data',
      data: data,
      pagination: {
        page: page,
        size: size,
        totalContent: count,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      code: 500,
      title: 'ERROR',
      message: error.message,
      data: null,
    });
  }
}
