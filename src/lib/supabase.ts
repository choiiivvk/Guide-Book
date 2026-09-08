/// <reference types="vite/client" />
import { createClient } from '@supabase/supabase-js';

const getStoredConfig = () => {
  const url = import.meta.env.VITE_SUPABASE_URL || localStorage.getItem('supabase_url') || '';
  const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || localStorage.getItem('supabase_anon_key') || '';
  return { url, anonKey };
};

export const { url: defaultUrl, anonKey: defaultKey } = getStoredConfig();

export const createSupabaseClient = (customUrl?: string, customKey?: string) => {
  const url = customUrl || import.meta.env.VITE_SUPABASE_URL || localStorage.getItem('supabase_url') || '';
  const anonKey = customKey || import.meta.env.VITE_SUPABASE_ANON_KEY || localStorage.getItem('supabase_anon_key') || '';
  
  if (!url || !anonKey) {
    return null;
  }
  
  return createClient(url, anonKey);
};

export const supabase = createSupabaseClient();
