# Dbeuh

```sql
GRANT USAGE ON SCHEMA skm TO postgres, anon, authenticated, service_role, dashboard_user;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA skm TO postgres, authenticated, service_role, dashboard_user, anon;
DROP SCHEMA skm CASCADE;
```

Create Policy - Example

```sql
CREATE POLICY "Enable read access for authenticated users" ON "public"."item"
AS PERMISSIVE FOR SELECT
TO authenticated
USING (true)

===
CREATE POLICY "Read Acccess to Authenticated Users" ON "ksk"."cart"
FOR SELECT
TO authenticated
USING (true)


===
CREATE POLICY "Grant all access to authenticated users" ON "public"."item"
AS PERMISSIVE FOR ALL
TO authenticated
```

If you want full control of your database by preventing unauthorised access to all tables, you have to use
supabase token, in which you have to pass NX_SUPABASE_SERVICE_ROLE_KEY when creating supabase client
As using NX_SUPABASE_ANON_KEY will not work even though you already pass the token

```js
export function supabaseClient(options, token) {
  const options = {
    ...options,
    schema: schema || 'public',
    global: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };

  return createClient(
    process.env.NX_SUPABASE_URL,
    process.env.NX_SUPABASE_SERVICE_ROLE_KEY,
    // NX_SUPABASE_ANON_KEY
    options
  );
}
```


```bash
curl 'https://qahrpqxcgrumwkayyowt.co/rest/v1/brand?select=*' \
-H "apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFhaHJwcXhjZ3J1bXdrYXl5b3d0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI5MjA0MDEsImV4cCI6MTk4ODQ5NjQwMX0.71bfd4Z8jccfoPLJn-yxolOQNlYoJuY9TLOYvLRgPoY" \
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjc0MjE5NTc4LCJzdWIiOiIwMDJkYjY1ZS1lZGNmLTQyNTMtODA0MS1kNDgzNjRlMTY3ODAiLCJlbWFpbCI6ImVrby5hbmRyaTlAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6e30sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE2NzQyMTU5Nzh9XSwic2Vzc2lvbl9pZCI6IjYwNWVlY2EwLTNjZTUtNDE0Mi05MDE1LTVmZmIwZTZhNmM0NSJ9.o9jsXoErMywRWe_SJ49d4mERSwY5RZ3WQbVwwtXc4P4"
```
