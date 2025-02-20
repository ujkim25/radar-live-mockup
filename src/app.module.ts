import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComputePremiumController } from './compute-premium/compute-premium.controller';

@Module({
  imports: [],
  controllers: [AppController, ComputePremiumController],
  providers: [AppService],
})
export class AppModule {}
