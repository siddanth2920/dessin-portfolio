import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://pwdycjzkitjmsvvbwwqs.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB3ZHljanpraXRqbXN2dmJ3d3FzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEyNzA1MjgsImV4cCI6MjA3Njg0NjUyOH0.pBMAajMsHoGHaMD402eHIpV22GHcQh2B4gWpwaBmNQw";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
