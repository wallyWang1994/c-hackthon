import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import { MerchantService } from '../service/merchant.service';
import { MERCHANT_DETAIL_PAGE } from '../constants/dining-web-content';


@Component({
    selector: 'merchant-detail',
    templateUrl: './merchant-detail.component.html',
    styleUrls: ['./merchant-detail.component.scss']
})
export class MerchantDetailComponent implements OnInit, OnDestroy {

   private merchantDetail:any;
   private content = MERCHANT_DETAIL_PAGE
    constructor(private merchantService:MerchantService,
        private router: Router
    ) {
    }

    querySub: Subscription;

    ngOnInit() {
       this.merchantDetail = this.merchantService.getMerchantDetail();

    }

   bookNow(data:any){
       this.merchantService.setPrivilegeDetail(data);
        this.router.navigate(["dining-mobile/home/book-dining"])
   }

    ngOnDestroy(): void {
        
    }

}
