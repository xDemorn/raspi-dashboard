import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundController } from './not-found.controller.js';

describe('NotFoundController', () => {
  let controller: NotFoundController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotFoundController],
    }).compile();

    controller = module.get<NotFoundController>(NotFoundController);
  });

  describe('notFound', () => {
    it('returns the invalid-route message', () => {
      expect(controller.notFound()).toEqual({
        message: 'The route you are trying to access is not valid.',
      });
    });
  });
});
