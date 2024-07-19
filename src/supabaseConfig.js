import { createClient } from "@supabase/supabase-js";
// import "dotenv/config";
// console.log(process.env); // remove this after you've confirmed it is working

// XXXX `import.meta.env` NOT WORK WITH JEST
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
// const supabaseUrl = process.env.VITE_SUPABASE_URL;
// const supabaseKey = process.env.VITE_SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
