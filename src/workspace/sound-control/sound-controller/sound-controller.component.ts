import { Component, OnInit } from '@angular/core';
import { SignalRClient } from '../services/signalR.client';

@Component({
  selector: 'app-sound-controller',
  templateUrl: './sound-controller.component.html',
  styleUrls: ['./sound-controller.component.css']
})
export class SoundControllerComponent implements OnInit {

  constructor(private signalRClient: SignalRClient) { }

  ngOnInit() {
    this.signalRClient.signalRClientInit();
  }

  public volumeUp(){
    this.signalRClient.sendMasterVolumeUp();
  }

  public volumeDown(){
    this.signalRClient.sendMasterVolumeDown();
  }

  public powerOn(){
    this.signalRClient.sendPowerOn();
  }

  public powerOff(){
    this.signalRClient.sendPowerOff();
  }

}
