import { ISupabase, usePostSupabase } from '@wsh4and/utils';
import { useEffect } from 'react';

const PARAMS: ISupabase = {
  // Schema public sudah default, tidak perlu define
  data: {
    table: 'category',
    select: '*',
    // select: 'item_code, item_name',
    page: 1,
    size: 5,
  },
};

export function Index() {
  const [category, pagination, getCategory] = usePostSupabase(PARAMS);

  useEffect(() => {
    console.log(category);
  }, [category]);

  return <>TEST</>;
}

export default Index;
