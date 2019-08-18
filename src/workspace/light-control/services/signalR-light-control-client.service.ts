import {Injectable} from '@angular/core';
import { HubConnection, HubConnectionBuilder} from '@aspnet/signalr';
import * as signalR from '@aspnet/signalr';

@Injectable({
    providedIn: 'root',
  })
  export class SignalRLightControlClientService {
    private hubConnection: HubConnection;
    private builder : HubConnectionBuilder;
    constructor() {}

    private testToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYmxlamEiLCJleHAiOjE1Njg3MTkxOTYsImlzcyI6IlNpZ25hbFJBdXRoZW50aWNhdGlvblNhbXBsZSIsImF1ZCI6IlNpZ25hbFJBdXRoZW50aWNhdGlvblNhbXBsZSJ9.XMu6ait6BcAJNuRDQi6tTs-g2VSGls4yc3d5GA6tKKU';

    public signalRClientInit(){
        this.builder = new HubConnectionBuilder();
        this.hubConnection = this.builder.withUrl(`https://localhost:44367/LightServiceHub`, {
            accessTokenFactory: () =>  this.testToken
        })
        .configureLogging(signalR.LogLevel.Information)
        .build();
       
        this.hubConnection.on('ReceiveMessage', (user, message) => {
            console.log(`Message from ${user} recived. ${message}`);
          });

        this.hubConnection.on('ReceiveLightPointStatus', (lightPointNumber, lightPointStatus, lightMqttId) => {
            console.log(`Message from ${lightPointNumber} recived.`);
          });

        this.hubConnection
            .start()
            .catch(err => console.error(err.toString()));;
    }

    public sendLightPointStatus(lightPointNumber: number, lightPointStatus: boolean, lightMqttId: string)
    {
        this.hubConnection.invoke('SendLightPointStatus',lightPointNumber,lightPointStatus,lightMqttId)
    }
  }