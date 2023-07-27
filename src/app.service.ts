import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(request: Request): string {
    console.log(request.body);
    return 'request.body.name';
  }
}
