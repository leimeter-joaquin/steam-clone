import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
// import { User as UserModel, Prisma } from '@prisma/client';

@Controller('')
export class AppController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get('')
  async get() {
    return 'hello';
  }
}
