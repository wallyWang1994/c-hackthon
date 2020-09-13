import {Component, OnDestroy, OnInit} from '@angular/core';

import {Subscription} from "rxjs";
import { DINING_BOOK_PAGE } from '../constants/dining-web-content';
import { BookRequest } from '../model/book-request-model';
import { NgForm } from '@angular/forms';
import { OrderService } from '../service/order.service';
import { Router } from '@angular/router';
import { MerchantService } from '../service/merchant.service';


@Component({
    selector: 'book-dining',
    templateUrl: './book-dining.component.html',
    styleUrls: ['./book-dining.component.scss']
})
export class BookDiningComponent implements OnInit {
    bookRequest: BookRequest = new BookRequest();
    bookContent = DINING_BOOK_PAGE;
    private merchantDetail:any;
    private privilegeDetail:any;
    constructor(private orderService:OrderService,
        private merchantService:MerchantService,
        private router: Router
    ) {
    }

    querySub: Subscription;

    ngOnInit() {
        console.error("Hayle-----------------",this.bookContent)
        this.merchantDetail = this.merchantService.getMerchantDetail();
        this.privilegeDetail = this.merchantService.getPrivilegeDetail();
    }

    bookDining(form: NgForm) {
        console.error(form);
        
        this.orderService.bookDining(form.value);
        this.router.navigate(["dining-mobile/home/order-detail",{}]);
    }
}
