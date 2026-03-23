import { createClient } from '@supabase/supabase-js';

const URL = 'https://ckuvlbplzcekganvxsdh.supabase.co'; 

const API_KEY = 'sb_publishable_ye_0tsxL7uZxARQZY3O1pQ_0NTJUCZJ'; 

export const supabase = createClient(URL, API_KEY);