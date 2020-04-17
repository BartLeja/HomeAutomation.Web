import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { SignalRLightControlClientService } from '../services/signalR-light-control-client.service';
import { Subscription } from 'rxjs';
import { SignalRLightPoint } from '../models/signalR-light-point.model';
import { Guid } from 'guid-typescript';
import { Router } from '@angular/router';

@Component({
  selector: 'app-light-card',
  templateUrl: './light-card.component.html',
  styleUrls: ['./light-card.component.css']
})
export class LightCardComponent implements OnInit, OnDestroy {

  @Input() lightPoint;
  public lightPointObservable: SignalRLightPoint;
  private subscription: Subscription;

  constructor(
    public signalRLightControlClientService: SignalRLightControlClientService, 
    private router: Router) { }

  public ngOnInit() {
    console.log(this.lightPoint);
    this.subscription =
      this.signalRLightControlClientService.getMessage().subscribe(message => {
      if (message) {

      this.lightPoint.lightBulbs.map(lb => {
        //TODO renema for bulb
        if(lb.id === message.lightPointNumber){
          lb.status = message.lightPointStatus;
        } 
      });
        console.log(message);
      } else {
        // clear messages when empty message received
        // this.messages = [];
      }
    }); 
  }
  
  public changeLightStatus(lightPointNumber: Guid, status: boolean,) {
    if(!this.signalRLightControlClientService.isConnected){
      this.signalRLightControlClientService.startHubCennection();
    }

    this.signalRLightControlClientService.sendLightPointStatus(lightPointNumber,status);
    this.lightPoint.lightBulbs.map(lb => {
      //TODO renema for bulb
      if(lb.id === lightPointNumber){
        lb.status = status;
      } 
    });
  }

  public routeToSettings(lightPointId:Guid){
    this.router.navigate(['/shell/LightPointSettings',lightPointId]);
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
