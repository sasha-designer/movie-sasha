import { createClient } from '@supabase/supabase-js';
const VITE_ANON_KEY = import.meta.env.VITE_ANON_KEY;
const VITE_SUPABASE_PROJECT_URL = import.meta.env.VITE_SUPABASE_PROJECT_URL;

const supabaseUrl = VITE_SUPABASE_PROJECT_URL;
const supabaseKey = VITE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);