import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { tap, map, shareReplay, } from 'rxjs/operators';
import { JwtHelperService } from "@auth0/angular-jwt";
import { AuthorizationHelperService } from 'src/core/Authorization/authorization-helper.service';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
     
    constructor(private http: HttpClient, private authorizationHelperService: AuthorizationHelperService) {
    }
      
    public login(email:string, password:string ): Observable<any> {
        return this.http.post<any>(`${environment.IdentityServerbaseUrl}api/Authentication`, {email, password}).pipe(
            tap(res =>this.authorizationHelperService.setSession(res)),
            shareReplay()
        )
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