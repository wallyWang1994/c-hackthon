import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";


@Component({
    selector: 'privilege-item',
    templateUrl: './privilege-item.component.html',
    styleUrls: ['./privilege-item.component.scss']
})
export class PrivilegeItemComponent implements OnInit, OnDestroy {

   
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
