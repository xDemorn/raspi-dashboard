import { Controller, Get } from '@nestjs/common';
import { UploadsService } from './uploads.service.js';

@Controller('uploads')
export class UploadsController {
    constructor(private readonly appService: UploadsService) {}

    @Get('files')
    getFiles() {
        return this.appService.listFiles();
    }
}
