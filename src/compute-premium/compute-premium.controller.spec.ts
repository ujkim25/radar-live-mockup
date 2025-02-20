import { Test, TestingModule } from '@nestjs/testing';
import { ComputePremiumController } from './compute-premium.controller';

describe('ComputePremiumController', () => {
  let controller: ComputePremiumController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComputePremiumController],
    }).compile();

    controller = module.get<ComputePremiumController>(ComputePremiumController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
