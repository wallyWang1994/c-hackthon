import {Component, OnDestroy, OnInit, Input} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import { Merchant } from '../../model/merchant.model';
import { MerchantList } from '../../../shared/moke_data/dining-mock-data';
import { MerchantService } from '../../service/merchant.service';


@Component({
    selector: 'merchant-item',
    templateUrl: './merchant-item.component.html',
    styleUrls: ['./merchant-item.component.scss']
})
export class MerchantItemComponent implements OnInit {
    private merchantList:any;
    constructor(private router: Router,private merchantService:MerchantService) {}

    querySub: Subscription;

    ngOnInit() {
        
        this.merchantService.getMerchantListFromApi().subscribe(res=>{
            console.error("----list--");
            console.error(res.content.data)
            this.merchantList = res.content.data;
            
        })
    }

    goToDetail(merId:string){

        this.merchantService.getMerchantDetailFromApi(merId).subscribe(res=>{
            console.error("----detail--");
            console.error(res.content);
            this.merchantService.setMerchantDetail(res.content);
            this.merchantService.setPrivilegesList(res.content.privileges);
            this.router.navigate(["dining-mobile/home/merchant-detail",{}]);

        })

        
    }


}