// Pulse Fit connection settings. Replace the two values below with the ones from YOUR Pulse Fit
// Supabase project (Project Settings > API). Keep the quotation marks and semicolons.
// The anon key is safe in the browser. NEVER put the service_role key here.
var SUPABASE_URL = "https://YOUR-PROJECT.supabase.co";
var SUPABASE_ANON_KEY = "YOUR-ANON-KEY";
var sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
