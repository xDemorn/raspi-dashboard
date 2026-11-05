import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types.js';
import { AppModule } from './../src/app.module.js';
import { AppService } from './../src/app.service.js';
import { UploadsService } from './../src/uploads/uploads.service.js';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(AppService)
      .useValue({ getSystemInfo: async () => ({ cpuCurrentSpeed: 1 }) })
      .overrideProvider(UploadsService)
      .useValue({ onModuleInit() {} })
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/api/system (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/system')
      .expect(200)
      .expect({ cpuCurrentSpeed: 1 });
  });

  it('unknown route returns the invalid-route message', () => {
    return request(app.getHttpServer())
      .get('/does-not-exist')
      .expect(200)
      .expect({ message: 'The route you are trying to access is not valid.' });
  });

  afterEach(async () => {
    await app.close();
  });
});
