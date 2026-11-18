import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export function getPublicSupabaseClient() {
  if (!supabaseUrl || !supabaseAnonKey) {
    return null;
  }
  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: { persistSession: false },
  });
}

export function getServerSupabaseClient() {
  if (!supabaseUrl || !(supabaseServiceKey || supabaseAnonKey)) {
    return null;
  }
  return createClient(supabaseUrl, supabaseServiceKey || supabaseAnonKey!, {
    auth: { persistSession: false },
  });
}
