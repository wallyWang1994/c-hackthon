import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import { OrderService } from '../service/order.service';
import { Order } from '../model/order.model';
import { MerchantService } from '../service/merchant.service';


@Component({
    selector: 'order-detail',
    templateUrl: './order-detail.component.html',
    styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit, OnDestroy {

   private order:Order;
   private merchantDetail:any;
   
    constructor(private orderService:OrderService,private merchantService:MerchantService
    ) {
    }

    querySub: Subscription;

    ngOnInit() {
        this.merchantDetail = this.merchantService.getMerchantDetail();
       this.order = this.orderService.getCurrentOrder();
        console.error("order------",this.order)
    }

   

    ngOnDestroy(): void {
        
    }

}
