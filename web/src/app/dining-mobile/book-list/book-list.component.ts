import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import { OrderList } from '../../shared/moke_data/dining-mock-data';
import { ORDER_LIST_PAGE } from '../constants/dining-web-content';
import { Order } from '../model/order.model';
import { OrderService } from '../service/order.service';


@Component({
    selector: 'book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {

    bookList:[any];
    bookListContent = ORDER_LIST_PAGE
    constructor(private router: Router,private orderService:OrderService) {
    }

    querySub: Subscription;

    ngOnInit() {
        this.orderService.getOrderListFromApi().subscribe(res=>{
            this.bookList = res.content.data;
        })

    }


    ngOnDestroy(): void {
        
    }

}
