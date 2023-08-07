import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

// This whould be a Data Transfer Object (DTO)
interface SignInBody {
  email: string;
  password: string;
}

interface SignUpBody {
  email: string;
  password: string;
  username: string;
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-in')
  @HttpCode(HttpStatus.OK)
  async signin(@Body() body: SignInBody) {
    // TODO: session.
    const { user, session } = await this.authService.signIn(
      body.email,
      body.password,
    );
    return { user, session };
  }

  @Post('sign-up')
  async signup(@Body() body: SignUpBody) {
    const { user } = await this.authService.signUp(
      body.email,
      body.password,
      body.username,
    );
    return user;
  }
}
