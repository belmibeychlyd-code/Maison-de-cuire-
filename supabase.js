const SUPABASE_URL = "https://cixgbuymxgrxrrqomewg.supabase.co";
 
const SUPABASE_KEY = "sb_publishable_ABvs4ql7xnC1nlh2KavG-g_251IWSFq"

window.supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);
