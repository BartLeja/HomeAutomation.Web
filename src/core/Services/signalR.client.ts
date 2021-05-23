import {Injectable, EventEmitter} from '@angular/core';
import  { HubConnection, HubConnectionBuilder, HubConnectionState, LogLevel} from '@microsoft/signalr'
import { environment } from '../../environments/environment'


@Injectable({
    providedIn: 'root',
  })
  export class SignalRClient {
    public hubConnection: HubConnection;
    private builder : HubConnectionBuilder;
    public isConnectedToSignRProperty = true;
    public newConnectionEvent = new EventEmitter();

    public signalRClientInit(){
        this.builder = new HubConnectionBuilder();
        this.hubConnection = this.builder
        .withUrl(environment.HomeSystemSignlRHubUrl, {
            accessTokenFactory: () =>  localStorage.getItem('id_token')
        })
        .withAutomaticReconnect()
        .configureLogging(LogLevel.Debug)
        .build();
       
        this.hubConnection.onclose(()=>{
            this.startHubCennection();
        })

        this.startHubCennection();
    }

    public isConnected() : boolean{
        return this.hubConnection?.state === HubConnectionState.Connected ? true : false;
    }

    public startHubCennection() : void {
        if(this.hubConnection && this.hubConnection?.state && this.hubConnection?.state !== HubConnectionState.Connected){
            this.hubConnection
            .start()
            .then(x=>{
                this.newConnectionEvent.emit('connectedToSignalR');
            })
            .catch(err => {
                console.error(err.toString()); 
                if(this.hubConnection && this.hubConnection?.state && this.hubConnection.state !== HubConnectionState.Connected){ 
                    setTimeout(() => this.startHubCennection(), 5000)
                }else{
                   // this.newConnectionEvent.emit('connectedToSignalR');
                }
               
            } );

        }else{
            this.newConnectionEvent.emit('connectedToSignalR');
        } 
    }
  }
