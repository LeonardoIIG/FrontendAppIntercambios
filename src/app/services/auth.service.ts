import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

    constructor(private _httpClient: HttpClient) { }
    
    //GET
    public getExpiringDocumentsDriver(): Observable<any> {
        const path = environment.apirestURL + environment.apiVersion.v1 + environment.apiService.documentationRecord + 'getExpiringDocumentsDriver/'
        return this._httpClient.get<any>(path, {headers: {'x-api-key': environment.apiKey}})
    }

    //POST
    public updateTablet(body: any): Observable<any> {
        const path = environment.apirestURL + environment.apiVersion.v1 + environment.apiService.documentationRecord + 'updateTablet/'
        return this._httpClient.post(path, body, {headers: {'x-api-key': environment.apiKey}})
    }
}