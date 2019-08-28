import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as moment from 'moment';

@Injectable({
    providedIn: 'root',
})
export class AuthorizationHelperService {

    public setSession(authResult) {
        const helper = new JwtHelperService();
        const expirationDate = helper.getTokenExpirationDate(authResult.token);
       // const expiresAt = moment().add(expirationDate,'second');

        localStorage.setItem('id_token', authResult.token);
        localStorage.setItem("expires_at", JSON.stringify(expirationDate));
    } 

    public isLoggedIn() {
        return moment().isBefore(this.getExpiration());
    }

    private getExpiration() {
        const expiration = localStorage.getItem("expires_at");
        const expiresAt = JSON.parse(expiration);
        let t2 = moment(expiresAt);
       // let t = moment(expiration);
        return moment(t2 );
    }  
}