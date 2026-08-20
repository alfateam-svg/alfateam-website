// ── Fill these in after creating your Supabase project ──
// Project Settings > API > Project URL / anon public key
const SUPABASE_URL = "https://xgbzrozywdrdxwarhnsm.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_qruNKhuU2ySK9KRxJPaFpA_rXA_bc8j";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
