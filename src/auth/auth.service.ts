import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly supabase: SupabaseService,
    private readonly prisma: PrismaService,
  ) {}

  async signIn(email: string, password: string) {
    const { data, error } = await this.supabase.client.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }

    // Puedes devolver el usuario o el token de sesión según tus necesidades.
    const { user, session } = data;
    return { user, session };
  }

  async signUp(email: string, password: string, username: string) {
    try {
      const { data, error } = await this.supabase.client.auth.signUp({
        email,
        password,
      });

      if (error) {
        throw new HttpException(error, HttpStatus.BAD_REQUEST);
      }

      await this.prisma.users.create({
        data: { email, id: data.user.id, username },
      });

      const { user } = data;

      return { user };
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async signOut() {
    await this.supabase.client.auth.signOut();
  }
  // Otros métodos relacionados con la autenticación (restablecimiento de contraseña, etc.).
}
