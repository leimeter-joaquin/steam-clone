import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../supabase.service';

@Injectable()
export class AuthService {
  constructor(private readonly supabase: SupabaseService) {}
  async signIn(email: string, password: string) {
    const { data, error } = await this.supabase.client.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      throw new Error('Authentication failed');
    }
    // Puedes devolver el usuario o el token de sesión según tus necesidades.
    const { user, session } = data;
    return { user, session };
  }
  async signUp(email: string, password: string) {
    const { data, error } = await this.supabase.client.auth.signUp({
      email,
      password,
    });
    if (error) {
      throw new Error('Sign-up failed');
    }
    const { user } = data;
    return { user };
  }
  async signOut() {
    await this.supabase.client.auth.signOut();
  }
  // Otros métodos relacionados con la autenticación (restablecimiento de contraseña, etc.).
}
