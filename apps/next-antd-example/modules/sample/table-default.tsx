/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react';
import { Descriptions, Divider, Typography } from 'antd';
import axios from 'axios';

// Shared Libraries
import { Table } from '@dbeuh/antd';

// Local Libraries
import { remapColumns } from './columns';

const { Text, Link } = Typography;

export default function Page(props) {
  const columns = remapColumns();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    /**
     * Without any params, in the axios body, this will get all data available
     * mimicking the select all query if we are getting data directly from database
     */
    getData();

    async function getData() {
      setLoading(true);
      const res = await axios('/api/table', {
        method: 'POST',
      });
      setLoading(false);
      setData(res.data.data.tableData);
    }
  }, []);

  return (
    <>
      <Descriptions title="How to use Table Component" bordered style={{ marginBottom: 15 }}>
        <Descriptions.Item label="Link" span={3}>
          <Link href="https://ant.design/components/table/" target="_blank">
            Ant Design Table
          </Link>
        </Descriptions.Item>
        <Descriptions.Item label="Descriptions" span={3}>
          This custom table only add a function to calculate the width of total columns so it's
          scrollable and not breaking the layout.
          <br />
          All original APIs of Ant Design Table are not changed and added with two additionals props
          (which were actually just part of the original scroll props).
          <br />
          <Text code mark>
            scrollx
          </Text>{' '}
          is a number type of props to define the width of the table
          <br />
          <Text code mark>
            scrolly
          </Text>{' '}
          is a number type of props to define the height of the table
          <Divider style={{ margin: 10 }} />
          This sample table using all default props, including pagination.
        </Descriptions.Item>
        <Descriptions.Item label="Remark" span={3}>
          Refer to the sample code on how to use the table.
          <br />
          Observe in the sample code, we use a function to return an array of columns so we can pass
          any argument to the function.
          <br />
          For instance, if you want to pass a filter function to the column, we can just call the
          remap function and add the arguments like so:
          <br />
          <Text code mark>
            remapColumns(arg1, arg2)
          </Text>
          <Divider style={{ margin: 10 }} />
          Custom column function like filter or sort will work with no additional request to the
          backend since we are getting all the data at once.
        </Descriptions.Item>
      </Descriptions>
      <Table columns={columns} dataSource={data} bordered scrolly={400} loading={loading} />
    </>
  );
}
