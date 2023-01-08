import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(process.env.NX_SUPABASE_URL, process.env.NX_SUPABASE_ANON_KEY);
