import {Injectable, EventEmitter} from '@angular/core';
import { SignalRLightPoint } from '../models/signalR-light-point.model'
import { Subject, Observable } from 'rxjs';

import { LightService } from './light-control.service';
import { SignalRClient } from '../../../core/Services/signalR.client';


@Injectable({
    providedIn: 'root',
  })
  export class LightSignalRClient {
  //  public signalRClient: SignalRClient;
    public lightPoint : SignalRLightPoint;
    private lightPointSubject = new Subject<SignalRLightPoint>();
   
    public isConnectedToSignRProperty = true;
    public newConnectionEvent = new EventEmitter();

    constructor(private signalRClient: SignalRClient, private lightService: LightService) {}

    public sendMessage(message: SignalRLightPoint) {
        this.lightPointSubject.next(message);
    }

    public getMessage(): Observable<SignalRLightPoint> {
        return this.lightPointSubject.asObservable();
    }

    public signalRClientInit(){
        
        this.signalRClient.hubConnection.on('ReceiveMessage', (user, message) => {
            console.log(`Message from ${user} recived. ${message}`);
          });

        this.signalRClient.hubConnection.on('ReceiveLightPointStatus', (lightBulbId, status, lightNumber) => {
            this.lightPoint = new SignalRLightPoint(lightNumber,  status, lightBulbId,);
            this.sendMessage(this.lightPoint);
            console.log( lightBulbId, status);
          });
    }

    public sendLightPointStatus(lightPointId: string, status: boolean,lightNumber : number)
    {
        this.signalRClient.hubConnection.invoke('SendLightPointStatus',lightPointId,status, lightNumber);
    }

    public sendHardRestOfLightPointMessage(lightPointId: any){
        this.signalRClient.hubConnection.invoke('SendHardRestOfLightPointMessage',lightPointId);
    }

    public senddRestOfLightPointMessage(lightPointId: any){
        this.signalRClient.hubConnection.invoke('SendRestOfLightPointMessage',lightPointId);
    }

    public sendLightPointsGroupStatus(lightPointsGroupId: any, status: boolean){
        this.signalRClient.hubConnection.invoke('SendLightPointsGroupStatus',lightPointsGroupId,status );
    }
  }
