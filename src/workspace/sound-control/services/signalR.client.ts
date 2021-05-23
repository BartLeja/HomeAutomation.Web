
import {Injectable} from '@angular/core';
import { SignalRClient } from '../../../core/Services/signalR.client';

@Injectable({
    providedIn: 'root',
  })
  export class SoundSignalRClient {
   
    constructor(private signalRClient: SignalRClient){};

    public signalRClientInit(){
       
        this.signalRClient.hubConnection.on('ChangeVolume', (level) => {
           
            console.log(level);
          });

        this.signalRClient.hubConnection.on('PowerOff', () => {
           
            console.log('PowerOff');
        });

        this.signalRClient.hubConnection.on('PowerOn', () => {
           
            console.log('PowerOn');
        });

    }

    public sendMasterVolumeDown(){
        this.signalRClient.hubConnection.invoke('SendMasterVolumeDown');
    }

    public sendMasterVolumeUp(){
        this.signalRClient.hubConnection.invoke('SendMasterVolumeUp'); 
    }

    public sendPowerOff(){
        this.signalRClient.hubConnection.invoke('SendPowerOff');
    }

    public sendPowerOn(){
        this.signalRClient.hubConnection.invoke('SendPowerOn'); 
    }
  }