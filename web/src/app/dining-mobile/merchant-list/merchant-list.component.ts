import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import { MerchantList } from '../../shared/moke_data/dining-mock-data';
import { MerchantService } from '../service/merchant.service';

@Component({
    selector: 'merchant-list',
    templateUrl: './merchant-list.component.html',
    styleUrls: ['./merchant-list.component.scss']
})
export class MerchantListComponent implements OnInit, OnDestroy {

    loading = true;
    private merchantList:any;
    constructor(private merchantService:MerchantService
    ) {
    }

    querySub: Subscription;

    ngOnInit() {
      

    }

   

    ngOnDestroy(): void {
        
    }

}
