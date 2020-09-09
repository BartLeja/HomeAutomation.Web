import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment'
import { HttpClient, HttpParams } from '@angular/common/http';
import { LightGroupDto } from '../dtos/light-group.dto';
import { Guid } from 'guid-typescript';

@Injectable({
    providedIn: 'root',
})
export class LightService {
    constructor(private http: HttpClient) {
    }

    public getLightingSystemConfiguration(): Observable<any> {
        const homeAutomationId = localStorage.getItem("home_automation_id")
         return this.http.get(`${environment.LightingSystemServiceUrl}api/HomeLightSystem/${homeAutomationId}`);
    }

    public addLightToGroup(lightsGroupDto: LightGroupDto): Observable<any> {
        return this.http.post(`${environment.LightingSystemServiceUrl}api/LightPoint/addlightsgrouptolightpoint`,lightsGroupDto)
    }

    public removeLightFromGroup(lightPointGuid: Guid ) : Observable<any> {
        return this.http.delete(`${environment.LightingSystemServiceUrl}api/LightPoint/removelightsgroupfromlightpoint/${lightPointGuid.toString()}`)
    }
}