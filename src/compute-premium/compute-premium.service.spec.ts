import { Test, TestingModule } from '@nestjs/testing';
import { ComputePremiumService } from './compute-premium.service';

describe('ComputePremiumService', () => {
  let service: ComputePremiumService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComputePremiumService],
    }).compile();

    service = module.get<ComputePremiumService>(ComputePremiumService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
