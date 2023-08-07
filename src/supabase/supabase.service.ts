import { Injectable } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
@Injectable()
export class SupabaseService {
  private readonly supabaseClient: SupabaseClient;
  constructor() {
    this.supabaseClient = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_KEY,
    );
  }
  get client(): SupabaseClient {
    return this.supabaseClient;
  }
}
