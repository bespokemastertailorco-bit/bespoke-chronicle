import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://iyiwbzdcinixiqsyybhb.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml5aXdiemRjaW5peGlxc3l5YmhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYxNDMzMTcsImV4cCI6MjA5MTcxOTMxN30.kpzB1tOdhibjGTyUKZWRGScNWRWwpSxHge-NW9_xYBI";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
