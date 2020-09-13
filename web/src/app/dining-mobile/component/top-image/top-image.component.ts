import {Component, OnDestroy, OnInit, Input} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";


@Component({
    selector: 'top-image',
    templateUrl: './top-image.component.html',
    styleUrls: ['./top-image.component.scss']
})
export class TopImageComponent implements OnInit, OnDestroy {

    @Input()imgUrl:string;
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
