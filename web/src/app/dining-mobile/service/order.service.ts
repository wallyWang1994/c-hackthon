import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";
import {Observable, of} from "rxjs";
import { apiUrl } from '../../../environments/environment';
import { Order } from '../model/order.model';
import { BookRequest } from '../model/book-request-model';
import { checkInOrder, updateOrder, getOrderList } from '../constants/api-uri';

@Injectable()
export class OrderService {

    public currentOrder: Order;

    private orderUrl = `${apiUrl}/order`;

    constructor(private http: HttpClient) {
    }

    getPage(page = 1, size = 10): Observable<any> {
        return this.http.get(`${this.orderUrl}?page=${page}&size=${size}`).pipe();
    }

    getCurrentOrder(){
        return this.currentOrder;
    }

    setCurrentOrder(order:Order){
        this.currentOrder = order;
    }

    getOrderListFromApi(): Observable<any>{
        const url = apiUrl + getOrderList
        return this.http.get("/assets/mock/order-list.json")
            .pipe(
                tap(res => {
                    return res.content.data;
                }),
        )
    }

    bookDining(request:BookRequest): Observable<any> {
        const url = apiUrl + checkInOrder
        return this.http.post("/assets/mock/book-dining.json",request)
            .pipe(
                tap(res => {
                    return res.content.data;
                }),
        )
    }


    updateOrder(): Observable<any> {
        const url = apiUrl + updateOrder
        return this.http.get("/assets/mock/update-order.json")
            .pipe(
                tap(res => {
                    return res.content.data;
                }),
        )
    }
  
}
