import { All, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('api/system')
  getSystemInfo() {
    return this.appService.getSystemInfo();
  }

  @All('*splat')
  notFound() {
    return { message: 'The route you are trying to access is not valid.' };
  }
}
