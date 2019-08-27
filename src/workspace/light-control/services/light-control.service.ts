import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment'
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class LightService {
    constructor(private http: HttpClient) {
    }

    public getLightingSystemConfiguration(userName: any): Observable<any> {
        let params = new HttpParams();
        params = params.append('email', userName);
        return this.http.get(`${environment.LightingSystemServiceUrl}api/LightingSystemConfiguration`,{params: params})
    }
}