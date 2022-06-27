import { createClient } from '@supabase/supabase-js';

const supaURL: string = import.meta.env.VITE_REACT_APP_SUPABASE_URL;
const supaKey: string = import.meta.env.VITE_REACT_APP_SUPABASE_KEY;

const supabase = createClient(supaURL, supaKey);

export default supabase;
