import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { SignalRLightControlClientService } from '../services/signalR-light-control-client.service';
import { Subscription } from 'rxjs';
import { SignalRLightPoint } from '../models/signalR-light-point.model';

@Component({
  selector: 'app-light-card',
  templateUrl: './light-card.component.html',
  styleUrls: ['./light-card.component.css']
})
export class LightCardComponent implements OnInit, OnDestroy {

  constructor(public signalRLightControlClientService: SignalRLightControlClientService ) { }
  @Input() lightPoint;
  public isLightOn: boolean[];
  public numberOfLighBulbs = 1;
  public lightPointObservable: SignalRLightPoint;
  private subscription: Subscription;
  
  ngOnInit() {
    console.log('light-card-component');
    console.log(this.lightPoint);

    this.isLightOn = []; 
    this.isLightOn.push(this.lightPoint.lightBulbs[0].lightPointStatus);

    if(this.lightPoint.lightBulbs.length == 2){
      this.numberOfLighBulbs = 2;
      this.isLightOn.push(this.lightPoint.lightBulbs[1].lightPointStatus);
    } 

    this.subscription =
      this.signalRLightControlClientService.getMessage().subscribe(message => {
      if (message && message.lightMqttId === this.lightPoint.mqttId) {
        console.log('recived changed light');
        console.log(message);
        this.lightPointObservable = message;
        message.lightPointNumber === 0 ?  this.isLightOn[0] = message.lightPointStatus : this.isLightOn[1] = message.lightPointStatus;
      } else {
        // clear messages when empty message received
        // this.messages = [];
      }
    }); 
  }
  
  public changeLightStatus(status: boolean,lightPointNumber: number) {
    this.signalRLightControlClientService.sendLightPointStatus(lightPointNumber,status,this.lightPoint.mqttId);
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
}

}
