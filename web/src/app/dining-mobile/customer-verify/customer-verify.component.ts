import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
    selector: 'customer-verify',
    templateUrl: './customer-verify.component.html',
    styleUrls: ['./customer-verify.component.scss']
})
export class CustomerVerifyComponent implements OnInit, OnDestroy {

   
    constructor(private router: Router
    ) {
    }

    querySub: Subscription;

    ngOnInit() {
        console.error("Hayle-----------------")

    }

    verifyCustomer(){
        this.router.navigate(["dining-mobile/book-dining",{}]);
    }

    ngOnDestroy(): void {
        
    }

}
