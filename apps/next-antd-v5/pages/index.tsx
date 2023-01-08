import { useEffect, useState } from 'react';
import { Button, Divider, Space, Table } from '@wsh4and/antd-v5';
import axios from 'axios';
import { remapColumns } from '../components/columns';
import { validatePagination } from '@wsh4and/utils';
import { supabase } from '../utils';

export default function Index() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const columns = remapColumns();

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
      const newData = validatePagination(res.data);
      console.log(res.data);
      setData(newData);

      const { data, error } = await supabase
        .from('item')
        .select('item_code, item_name')
        .range(0, 9);
      console.log(data);
    }
  }, []);

  return (
    <>
      <Space wrap>
        <h1>TES</h1>;<Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
      </Space>
      <br />
      <Divider type="horizontal" style={{ color: 'orange', fontSize: 10 }} />
      <Table
        columns={columns}
        dataSource={data}
        bordered
        // scrolly={200}
        // scrollx={600}
        loading={loading}
        // pagination={pagination}
      />
    </>
  );
}
