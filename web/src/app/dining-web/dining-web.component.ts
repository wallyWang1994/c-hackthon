import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dining-web',
    templateUrl: './dining-web.component.html',
    styleUrls: ['./dining-web.component.scss']
})
export class DiningWebComponent implements OnInit {

    collapedSideBar: boolean;

    constructor() {}

    ngOnInit() {}

    receiveCollapsed($event) {
        this.collapedSideBar = $event;
    }
}
