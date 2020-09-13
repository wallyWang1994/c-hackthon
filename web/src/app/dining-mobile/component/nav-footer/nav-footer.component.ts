import {Component, OnDestroy, OnInit, Input} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
    selector: 'nav-footer',
    templateUrl: './nav-footer.component.html',
    styleUrls: ['./nav-footer.component.scss']
})
export class NavFooterComponent implements OnInit, OnDestroy {

    @Input() menuType:number;
   
    constructor( private router: Router
    ) {
    }

    querySub: Subscription;

    ngOnInit() {
        console.error("Hayle-----------------")

    }

   

    ngOnDestroy(): void {
        
    }

    navigateToNextPage(page:string){
        this.router.navigate(["dining-mobile/home/"+page,{}]);
    }
}
