/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Divider, Space, Notification } from '@wsh4and/antd-v5';
import { Table } from '@wsh4and/antd-v5';
import { ISupabase, usePostSupabase } from '@wsh4and/utils';
import { remapColumns } from '../components/columns';
import { useEffect, useState } from 'react';
import SignUp from '../components/sign-up-form';
import { supabaseClient } from '../utils';

const PARAMS: ISupabase = {
  url: '/api/supabase',
  // Schema public sudah default, tidak perlu define
  data: {
    table: 'brand',
    select: '*',
    // select: 'item_code, item_name',
    page: 1,
    size: 5,
  },
  // data: {
  //   schema: 'cst',
  //   table: 'address',
  //   select: '*',
  //   page: 1,
  //   size: 5,
  // },
  // data: {
  //   schema: 'ksk',
  //   table: 'v_cart', // getting data from a 'view' table
  //   select: '*',
  //   page: 1,
  //   size: 10,
  // },
};

export default function Index(props) {
  const columns = remapColumns();
  const [token, setToken] = useState(null);
  const options = {
    schema: PARAMS.data.schema,
    token,
  };
  const supabase = supabaseClient(options);
  const { response, pagination, postData } = usePostSupabase(PARAMS, token);

  async function signUpSupabase(email, password) {
    const { user, session, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      // options: {
      //   data: {
      //     user_name: userName.value,
      //   },
      // },
    });
    console.log(user, session, error);

    return { user, session, error };
  }

  async function signInSupabase(email, password) {
    const { user, session, error } = await supabase.auth.signIn({
      email: email,
      password: password,
      // options: {
      //   data: {
      //     user_name: userName.value,
      //   },
      // },
    });
    console.log(user, session, error);
    setToken(session.access_token);

    return { user, session, error };
  }

  useEffect(() => {
    console.log('index', response);
  }, [response]);

  return (
    <>
      <Notification response={response} />
      <Space wrap>
        <h1>TES</h1>;<Button type="primary">Primary Button</Button>
        <Button onClick={postData}>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
      </Space>
      <br />
      <Divider type="horizontal" style={{ color: 'orange', fontSize: 10 }} />
      <SignUp supabaseAuth={signUpSupabase} />
      <br />
      <SignUp supabaseAuth={signInSupabase} />
      <br />
      <Divider type="horizontal" style={{ color: 'orange', fontSize: 10 }} />
      <Table
        columns={columns}
        dataSource={response.data}
        bordered
        // scrolly={200}
        scrollx={300}
        loading={response.loading}
        pagination={pagination}
        rowKey="key"
      />
    </>
  );
}
