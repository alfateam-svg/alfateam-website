// ── Fill these in after creating your Supabase project ──
// Project Settings > API > Project URL / anon public key
const SUPABASE_URL = "https://xgbzrozywdrdxwarhnsm.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhnYnpyb3p5d2RyZHh3YXJobnNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODcxMDg4NzEsImV4cCI6MjEwMjY4NDg3MX0.m0MXrCnzhAIqYncmmLXsfWU5R_1saTJbq4BuaWHC3UA";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
