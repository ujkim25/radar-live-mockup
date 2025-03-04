import { Injectable } from '@nestjs/common';
import { RadarLiveResponse } from './radar-live-response.interface';
import { RadarLiveRequest } from './radar-live-request.dto';

@Injectable()
export class ComputePremiumService {
    computePremium(radarLiveRequest: RadarLiveRequest): RadarLiveResponse {
        const comp_premium= radarLiveRequest.prm_comp_ded * radarLiveRequest.prm_comp_limit * 0.0012;
        const coll_premium= radarLiveRequest.prm_coll_ded * radarLiveRequest.prm_coll_limit * 0.0012;
        const loss_premium= radarLiveRequest.prm_loss_limit * 0.0012;
        const bi_premium= radarLiveRequest.prm_bi_limit * 0.0012;
        const pd_premium= radarLiveRequest.prm_pd_limit * 0.0012;
        const medpay_premium= radarLiveRequest.prm_medpay_limit * 0.0012;
        const gross_premium= comp_premium+coll_premium+loss_premium+bi_premium+pd_premium+medpay_premium;
        const net_premium= gross_premium*1.05;

        return {
            prm_comp_premium: comp_premium,
            prm_coll_premium: coll_premium,
            prm_loss_premium: loss_premium,
            prm_bi_premium: bi_premium,
            prm_pd_premium: pd_premium,
            prm_medpay_premium: medpay_premium,
            prm_gross_premium: gross_premium,
            prm_net_premium: net_premium,
            prm_total_premium: net_premium,
        };
    }
}
