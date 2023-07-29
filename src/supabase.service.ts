import { Injectable } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
@Injectable()
export class SupabaseService {
  private readonly supabaseClient: SupabaseClient;
  constructor() {
    this.supabaseClient = createClient(
      process.env.SUPABASE_URL, // Debes configurar esta variable en tu archivo .env
      process.env.SUPABASE_KEY, // Debes configurar esta variable en tu archivo .env
    );
  }
  get client(): SupabaseClient {
    return this.supabaseClient;
  }
}
