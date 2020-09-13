import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Subscription } from "rxjs";
import { ActivatedRoute } from "@angular/router";


@Component({
    selector: 'top-banner',
    templateUrl: './top-banner.component.html',
    styleUrls: ['./top-banner.component.scss']
})
export class TopBannerComponent implements OnInit {

    @Input() loop: number;
    @Input() height: number;

    constructor() {}




    ngOnInit() { }

    arrayOne(n: number): any[] {
        return Array(n);
    }

}
