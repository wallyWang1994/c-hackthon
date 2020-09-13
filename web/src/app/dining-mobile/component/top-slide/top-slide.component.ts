import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";


@Component({
    selector: 'top-slide',
    templateUrl: './top-slide.component.html',
    styleUrls: ['./top-slide.component.scss']
})
export class TopSlideComponent implements OnInit, OnDestroy {

    public sliders: Array<any> = [];

   
       
    constructor(private httpClient: HttpClient,
               
                private route: ActivatedRoute
    ) {
        this.sliders.push(
            {
                imagePath: 'assets/images/1.png',
                label: 'First slide label',
                text:
                    'Nulla vitae elit libero, a pharetra augue mollis interdum.'
            },
            {
                imagePath: 'assets/images/2.png',
                label: 'Second slide label',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                imagePath: 'assets/images/3.jpg',
                label: 'Third slide label',
                text:
                    'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
            }
        );
    }

    querySub: Subscription;

    ngOnInit() {
        console.error("Hayle-----------------")

    }

   

    ngOnDestroy(): void {
        
    }

}
