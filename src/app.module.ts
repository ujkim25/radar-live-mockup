import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComputePremiumController } from './compute-premium/compute-premium.controller';
import { ComputePremiumService } from './compute-premium/compute-premium.service';

@Module({
  imports: [],
  controllers: [AppController, ComputePremiumController],
  providers: [AppService, ComputePremiumService],
})
export class AppModule {}
