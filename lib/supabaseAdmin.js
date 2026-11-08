import { createClient } from "@supabase/supabase-js";

let _client = null;

const supabaseAdmin = () => {
  if (!_client) {
    _client = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );
  }
  return _client;
};

export default supabaseAdmin;
