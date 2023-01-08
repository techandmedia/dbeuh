/* eslint-disable @typescript-eslint/no-explicit-any */
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

export default function handler(req: NextApiRequest, res: NextApiResponse<IData>) {
  const { page, size } = req.body;
  // console.log('req.body==========', req.body);

  try {
    const data = [];
    for (let i = 0; i < 500; i++) {
      data.push({
        name: i % 2 ? `Joe Doeglas ${i}` : `John Brown ${i}`,
        age: i + 1,
        street: 'Lake Park',
        building: 'C',
        number: i + 1,
        companyAddress: 'Lake Street 42',
        companyName: 'SoftLake Co',
        gender: 'M',
      });
    }

    let newData = data;
    if (req.body) {
      const dataWithPagination = [];
      for (let i = size * page - size; i < size * page; i++) {
        dataWithPagination.push(data[i]);
      }
      newData = dataWithPagination;
    }
    // console.log(newData);

    res.status(200).json({
      code: 200,
      title: 'OK',
      message: 'Sending Data',
      data: newData,
      pagination: {
        page: page,
        size: size,
        totalContent: data.length,
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
