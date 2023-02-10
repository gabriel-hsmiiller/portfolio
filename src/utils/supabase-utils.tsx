import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = 'https://jkhzkwcukolwkbnqhalf.supabase.co';
const SUPABASE_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpraHprd2N1a29sd2tibnFoYWxmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3NTUzNjcyNSwiZXhwIjoxOTkxMTEyNzI1fQ.y5rTC98oN9D4RxBPTu5ypNBACiyYWHSlOAGVLqHm0-s';
export const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);