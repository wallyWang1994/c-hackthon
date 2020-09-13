import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

   
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
