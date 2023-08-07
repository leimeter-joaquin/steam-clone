import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { SupabaseService } from 'src/supabase/supabase.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [AuthService, SupabaseService, PrismaService],
  controllers: [AuthController],
})
export class AuthModule {}
