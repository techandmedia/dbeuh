import { createClient } from '@supabase/supabase-js';
import { Database } from '../../../types/supabase';

export function supabaseClient(options?) {
  return createClient(process.env.NX_SUPABASE_URL, process.env.NX_SUPABASE_ANON_KEY, options);
}
// process.env.NX_SUPABASE_ANON_KEY
// process.env.NX_SUPABASE_SERVICE_ROLE_KEY,
