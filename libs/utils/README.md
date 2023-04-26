# A collection of simple utilities

Revamp all

version: 1.1.4

- Fix Supabase env when used in NextJs
  - NextJs requires you to expose the variables to public with a prefix like this
  ```js
  NEXT_PUBLIC_YOUR_VAR;
  ```
  so you need to define that in your local env
  - Make sure you name them correctly in order to use the utils usePostSupabase like this
  ```js
  NEXT_PUBLIC_SUPABASE_URL; // for your URL Supabase
  NEXT_PUBLIC_SUPABASE_ANON_KEY; // for your ANON KEY
  ```
  - If you want to name them differently, use it like this and just make sure that your env vars are not undefined
  ```js
  const PARAMS: ISupabase = {
    // Schema public sudah default, tidak perlu define
    db: {
      table: 'brand',
      select: '*',
      // select: 'item_code, item_name',
      page: 1,
      pageSize: 5,
    },
    client: {
      supabaseUrl: process.env.YOUR_SUPABASE_URL,
      supabaseKey: process.env.YOUR_SUPABASE_ANON_KEY,
    },
  };
  ```

```

version: 1.1.0

- Supabase
  - Required supabase key
  - Auth (Login, Logout) (not done yet)
  - Test getting data when RLS enable (not done yet)
  - Using custom hooks based on supabase

version: 0.0.1

- add row number function
- simple fetcher with axios
```
