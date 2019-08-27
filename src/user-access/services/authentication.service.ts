import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { tap, map, shareReplay, } from 'rxjs/operators';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
    providedIn: 'root',
})
export class AuthService {
     
    constructor(private http: HttpClient) {
    }
      
    public login(email:string, password:string ): Observable<any> {
        return this.http.post<any>(`${environment.IdentityServerbaseUrl}api/Authentication`, {email, password}).pipe(
            tap(res =>this.setSession(res)),
            shareReplay()
        )
    }

    private setSession(authResult) {
        const helper = new JwtHelperService();
        const expirationDate = helper.getTokenExpirationDate(authResult.token);
       // const expiresAt = moment().add(expirationDate,'second');

        localStorage.setItem('id_token', authResult.token);
        localStorage.setItem("expires_at", JSON.stringify(expirationDate));
    }     
    
    logout() : void {
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
    }

    public isLoggedIn() {
        return moment().isBefore(this.getExpiration());
    }

    getExpiration() {
        const expiration = localStorage.getItem("expires_at");
        const expiresAt = JSON.parse(expiration);
        return moment(expiration);
    }    
}