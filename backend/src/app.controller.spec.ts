import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  describe('getSystemInfo', () => {
    it('returns the system info from the service', async () => {
      const systemInfo = { cpuCurrentSpeed: {}, networkInterfaces: [] };
      vi.spyOn(appService, 'getSystemInfo').mockResolvedValue(systemInfo);

      await expect(appController.getSystemInfo()).resolves.toBe(systemInfo);
    });
  });
});
