/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Divider, Space, Notification } from '@wsh4and/antd-v5';
import { Table } from '@wsh4and/antd-v5';
import { ISupabase, usePostSupabase } from '@wsh4and/utils';
import { remapColumns } from '../components/columns';
import { useEffect, useState } from 'react';
import AuthForm from '../components/auth-form';
import { supabaseClient } from '../utils';

const PARAMS: ISupabase = {
  type: 'data',
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
  const [token, setToken] = useState(null);
  const [signedUp, setSignedUp] = useState(false);
  const supabase = supabaseClient();

  async function signUpSupabase(email, password) {
    const { user, session, error } = await supabase.auth.signUp({
      email: email,
      password: password,
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

  async function signOutSupabase() {
    const { error } = await supabase.auth.signOut();
    console.log(error);
    setToken(null);

    return { error };
  }

  return (
    <>
      {/* <Notification response={response} /> */}
      <Space wrap>
        <Button
          type="primary"
          onClick={() => {
            setSignedUp(s => !s);
          }}
        >
          Sign Up
        </Button>
        <Button onClick={signOutSupabase} type="dashed">
          Sign Out
        </Button>
      </Space>
      <br />
      <Divider type="horizontal" style={{ color: 'orange', fontSize: 10 }} />
      {signedUp && <AuthForm title="Form Sign UP" button="Sign Up" supabaseAuth={signUpSupabase} />}
      <br />
      {!token && <AuthForm title="Form Sign IN" button="Sign IN" supabaseAuth={signInSupabase} />}
      <br />
    </>
  );
}
