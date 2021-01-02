import {Injectable, EventEmitter} from '@angular/core';
// import { HubConnection, HubConnectionBuilder, HubConnectionState} from '@aspnet/signalr';
// import * as signalR from '@aspnet/signalr';
import  { HubConnection, HubConnectionBuilder, HubConnectionState, LogLevel} from '@microsoft/signalr'
import { SignalRLightPoint } from '../models/signalR-light-point.model'
import { Subject, Observable } from 'rxjs';
import { Guid } from "guid-typescript";
import { environment } from '../../../environments/environment'
import { LightService } from './light-control.service';


@Injectable({
    providedIn: 'root',
  })
  export class SignalRLightControlClientService {
    public lightPoint : SignalRLightPoint;
    private lightPointSubject = new Subject<SignalRLightPoint>();
    private hubConnection: HubConnection;
    private builder : HubConnectionBuilder;
    public isConnectedToSignRProperty = true;
    public newConnectionEvent = new EventEmitter();

    constructor(private lightService: LightService) {}

    public sendMessage(message: SignalRLightPoint) {
        this.lightPointSubject.next(message);
    }

    public getMessage(): Observable<SignalRLightPoint> {
        return this.lightPointSubject.asObservable();
    }

    public signalRClientInit(){
        this.builder = new HubConnectionBuilder();
        this.hubConnection = this.builder
        .withUrl(environment.LightingSystemSignlRHubUrl, {
            accessTokenFactory: () =>  localStorage.getItem('id_token')
        })
        .withAutomaticReconnect()
        .configureLogging(LogLevel.Information)
        .build();
       
        this.hubConnection.on('ReceiveMessage', (user, message) => {
            console.log(`Message from ${user} recived. ${message}`);
          });

        this.hubConnection.on('ReceiveLightPointStatus', (lightBulbId, status) => {
            this.lightPoint = new SignalRLightPoint(lightBulbId, status);
            this.sendMessage(this.lightPoint);
            console.log( lightBulbId, status);
          });
        
        this.hubConnection.onclose(()=>{
            this.startHubCennection();
        })

        this.startHubCennection();
    }

    public sendLightPointStatus(lightBulbId: Guid, status: boolean)
    {
        this.hubConnection.invoke('SendLightPointStatus',lightBulbId,status);
    }

    public sendHardRestOfLightPointMessage(lightPointId: Guid){
        this.hubConnection.invoke('SendHardRestOfLightPointMessage',lightPointId);
    }

    public senddRestOfLightPointMessage(lightPointId: Guid){
        this.hubConnection.invoke('SendRestOfLightPointMessage',lightPointId);
    }

    public sendLightPointsGroupStatus(lightPointsGroupId: Guid, status: boolean){
        this.hubConnection.invoke('SendLightPointsGroupStatus',lightPointsGroupId,status );
    }

    public isConnected() : boolean{
        return this.hubConnection.state === HubConnectionState.Connected ? true : false;
    }

    public startHubCennection() : void {
        if(this.hubConnection.state !== HubConnectionState.Connected){
            this.hubConnection
            .start()
            .then(x=>{
                this.newConnectionEvent.emit('connectedToSignalR');
            })
            .catch(err => {
                console.error(err.toString()); 
                if(this.hubConnection.state !== HubConnectionState.Connected){ 
                    setTimeout(() => this.startHubCennection(), 5000)
                }else{
                    this.newConnectionEvent.emit('connectedToSignalR');
                }
               
            } );

        }else{
            this.newConnectionEvent.emit('connectedToSignalR');
        } 
    }
  }
