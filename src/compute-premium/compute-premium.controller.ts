import { Body, Controller, Post } from '@nestjs/common';
import { RadarLiveRequest } from './radar-live-request.dto';
import { RadarLiveResponse } from './radar-live-response.interface';
import { ComputePremiumService } from './compute-premium.service';

@Controller('compute-premium')
export class ComputePremiumController {
    constructor(private computePremiumService: ComputePremiumService) {}

    @Post()
    computePremium(@Body() radarLiveRequest: RadarLiveRequest): RadarLiveResponse {
        console.log("inside mockup")
        return this.computePremiumService.computePremium(radarLiveRequest);
    }
}
