import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let supabaseClient: SupabaseClient | null = null;

export function getSupabaseClient() {
	const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
	const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

	if (!supabaseUrl || !supabaseAnonKey) {
		throw new Error("Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your environment.");
	}

	if (!supabaseClient) {
		supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
	}

	return supabaseClient;
}