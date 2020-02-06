import {Injectable} from '@angular/core';
import { HubConnection, HubConnectionBuilder} from '@aspnet/signalr';
import * as signalR from '@aspnet/signalr';
import { SignalRLightPoint } from '../models/signalR-light-point.model'
import { Subject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })
  export class SignalRLightControlClientService {
    public lightPoint : SignalRLightPoint;
    private lightPointSubject = new Subject<SignalRLightPoint>();
    private hubConnection: HubConnection;
    private builder : HubConnectionBuilder;
    constructor() {}

    private testToken = localStorage.getItem('id_token');

    public sendMessage(message: SignalRLightPoint) {
        this.lightPointSubject.next(message);
    }

    public getMessage(): Observable<SignalRLightPoint> {
        return this.lightPointSubject.asObservable();
    }

    public signalRClientInit(){
        this.builder = new HubConnectionBuilder();
        // this.hubConnection = this.builder.withUrl(`https://localhost:5003/LightServiceHub`, {
        this.hubConnection = this.builder
        .withUrl(`https://homeautomationlightingsystem.azurewebsites.net/LightServiceHub`, {
            accessTokenFactory: () =>  this.testToken
        })
        .configureLogging(signalR.LogLevel.Information)
        .build();
       
        
        this.hubConnection.on('ReceiveMessage', (user, message) => {
            console.log(`Message from ${user} recived. ${message}`);
          });

        this.hubConnection.on('ReceiveLightPointStatus', (lightPointNumber, lightPointStatus, lightMqttId) => {
            this.lightPoint = new SignalRLightPoint(lightPointNumber, lightPointStatus,  lightMqttId);
            this.sendMessage(this.lightPoint);
            console.log( this.lightPoint);
          });
        
        this.hubConnection.onclose(()=>{
            this. startHubCennection();
        })

        // this.hubConnection
        //     .start()
        //     .catch(err => {
        //         console.error(err.toString())} );
        this.startHubCennection();
    }

    public sendLightPointStatus(lightPointNumber: number, lightPointStatus: boolean, lightMqttId: string)
    {
        this.hubConnection.invoke('SendLightPointStatus',lightPointNumber,lightPointStatus,lightMqttId)
    }

    private startHubCennection() : void {
        this.hubConnection
        .start()
        .catch(err => {
            console.error(err.toString()); 
            setTimeout(() => this.startHubCennection(), 5000)} );
    }
  }