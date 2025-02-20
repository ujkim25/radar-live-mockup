import { Injectable } from '@nestjs/common';
import { RadarLiveResponse } from './radar-live-response.interface';
import { RadarLiveRequest } from './radar-live-request.dto';

@Injectable()
export class ComputePremiumService {
    computePremium(radarLiveRequest: RadarLiveRequest): RadarLiveResponse {
        return {
            totalPremium: radarLiveRequest.age*radarLiveRequest.medicalPayments,
            netPremium:radarLiveRequest.yearModel*radarLiveRequest.medicalPayments,
            grossPremium: radarLiveRequest.age*radarLiveRequest.yearModel*radarLiveRequest.medicalPayments,
        };
    }
}
