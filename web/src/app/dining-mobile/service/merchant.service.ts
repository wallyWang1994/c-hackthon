import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { apiUrl } from '../../../environments/environment.prod';
import { getMerchantList, getMerchantDetail } from '../constants/api-uri';
import { MerchantDetail } from '../model/merchant-detail.model';

@Injectable()
export class MerchantService {

    private merchantList: any;
    private merchantDetail: any;
    private privilegesList: any;
    private privilegeDetail: any;

    constructor(private http: HttpClient) {
    }

    getMerchantListFromApi(): Observable<any> {
        const url = apiUrl + getMerchantList
        return this.http.get("/assets/mock/merhchat-list.json")
            .pipe(
                tap(res => {
                    return res.content.data;
                }),
        )
    }

    getMerchantDetailFromApi(id: String): Observable<any> {
        const url = apiUrl + getMerchantDetail + "/" + id
        return this.http.get("/assets/mock/merchant-detail.json").pipe(
            catchError(_ => {
                console.log("Get Detail Failed");
                return of(new MerchantDetail());
            })
        );
    }




    setMerchantList(list: any) {
        this.merchantList = list;
    }

    getMerchantList() {
        return this.merchantList;
    }

    setMerchantDetail(detail: any) {
        this.merchantDetail = detail;
    }

    getMerchantDetail() {
        return this.merchantDetail;
    }


    setPrivilegesList(list: any) {
        this.privilegesList = list;
    }

    getPrivilegesList() {
        return this.privilegesList;
    }

    setPrivilegeDetail(detail: any) {
        this.privilegeDetail = detail;
    }

    getPrivilegeDetail() {
        return this.privilegeDetail;
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            console.error(error); // log to console instead

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
