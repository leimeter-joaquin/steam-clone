import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { SupabaseService } from 'src/supabase.service';

@Module({
  providers: [AuthService, SupabaseService],
  controllers: [AuthController],
})
export class AuthModule {}
