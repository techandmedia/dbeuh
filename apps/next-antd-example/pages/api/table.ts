/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  data: { tableData: any[]; totalContent: number };
  code: number;
  title: string;
  message: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { page, size } = req.body;

  const data = [];
  for (let i = 0; i < 1000; i++) {
    data.push({
      key: i + 1,
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

  let newData = { tableData: data, totalContent: data.length };
  if (req.body) {
    const dataWithPagination = [];
    for (let i = size * page - size; i < size * page; i++) {
      dataWithPagination.push(data[i]);
    }
    newData = { ...newData, tableData: dataWithPagination };
  }
  //   console.log('req.body==========', req.body);
  //   console.log(newData);

  res.status(200).json({
    data: newData,
    code: 200,
    title: 'OK',
    message: 'Sending Data',
  });
}
