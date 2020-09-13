import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dining-mobile',
    templateUrl: './dining-mobile.component.html',
    styleUrls: ['./dining-mobile.component.scss']
})
export class DiningMobileComponent implements OnInit {

    collapedSideBar: boolean;

    constructor() {}

    ngOnInit() {}

    receiveCollapsed($event) {
        this.collapedSideBar = $event;
    }
}
