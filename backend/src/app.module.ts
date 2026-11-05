import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UploadsController } from './uploads/uploads.controller.js';
import { NotFoundController } from './not-found.controller.js';
import { ConfigModule } from '@nestjs/config';
import { UploadsService } from './uploads/uploads.service.js';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, UploadsController, NotFoundController],
  providers: [UploadsService, AppService],
})
export class AppModule {}
