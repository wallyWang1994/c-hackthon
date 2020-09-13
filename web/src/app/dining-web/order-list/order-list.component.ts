import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import { OrderList } from '../../shared/moke_data/dining-mock-data';


@Component({
    selector: 'order-list',
    templateUrl: './order-list.component.html',
    styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit, OnDestroy {

   private orderList = OrderList
    constructor(private httpClient: HttpClient,
               
                private route: ActivatedRoute
    ) {
    }

    querySub: Subscription;

    ngOnInit() {
        console.error("Hayle-----------------")

    }

   

    ngOnDestroy(): void {
    }

}
