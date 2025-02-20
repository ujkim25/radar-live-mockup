import { Controller, Post } from '@nestjs/common';
import { RadarLiveRequest } from './radar-live-request.dto';
import { RadarLiveResponse } from './radar-live-response.interface';

@Controller('compute-premium')
export class ComputePremiumController {
    @Post()
    computePremium(radarLiveRequest: RadarLiveRequest): RadarLiveResponse {
        return {
            totalPremium: radarLiveRequest.age*radarLiveRequest.medicalPayments,
            netPremium:radarLiveRequest.yearModel*radarLiveRequest.medicalPayments,
            grossPremium: radarLiveRequest.age*radarLiveRequest.yearModel*radarLiveRequest.medicalPayments,
        };
    }
}
