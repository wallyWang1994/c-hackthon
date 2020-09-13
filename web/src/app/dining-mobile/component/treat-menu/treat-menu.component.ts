import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";


@Component({
    selector: 'treat-menu',
    templateUrl: './treat-menu.component.html',
    styleUrls: ['./treat-menu.component.scss']
})
export class TreatMenuComponent implements OnInit, OnDestroy {

   
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
