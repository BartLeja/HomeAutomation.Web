
import {Injectable, EventEmitter} from '@angular/core';
import  { HubConnection, HubConnectionBuilder, HubConnectionState, LogLevel} from '@microsoft/signalr'
import { environment } from '../../../environments/environment'

@Injectable({
    providedIn: 'root',
  })
  export class SignalRClient {
    private hubConnection: HubConnection;
    private builder : HubConnectionBuilder;
    public newConnectionEvent = new EventEmitter();

    public signalRClientInit(){
        this.builder = new HubConnectionBuilder();
        this.hubConnection = this.builder
        .withUrl(environment.SoundSystemSignlRHubUrl
        //     , 
        //     {
        //     accessTokenFactory: () =>  localStorage.getItem('id_token')
        // }
        )
        .withAutomaticReconnect()
        .configureLogging(LogLevel.Information)
        .build();

        this.hubConnection.onclose(()=>{
            this.startHubCennection();
        })

        this.hubConnection.on('ChangeVolume', (level) => {
           
            console.log(level);
          });

        this.hubConnection.on('PowerOff', () => {
           
            console.log('PowerOff');
        });

        this.hubConnection.on('PowerOn', () => {
           
            console.log('PowerOn');
        });

        this.startHubCennection();

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

    public sendMasterVolumeDown(){
        this.hubConnection.invoke('SendMasterVolumeDown');
    }

    public sendMasterVolumeUp(){
        this.hubConnection.invoke('SendMasterVolumeUp'); 
    }

    public sendPowerOff(){
        this.hubConnection.invoke('SendPowerOff');
    }

    public sendPowerOn(){
        this.hubConnection.invoke('SendPowerOn'); 
    }
  }