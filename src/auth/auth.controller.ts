import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

// This whould be a Data Transfer Object (DTO)
interface Body {
  email: string;
  password: string;
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  async signin(@Body() body: Body) {
    return this.authService.signIn(body.email, body.password);
  }
}
