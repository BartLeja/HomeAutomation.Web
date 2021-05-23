import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { LightSignalRClient } from '../services/signalR.client';
import { Subscription } from 'rxjs';
import { SignalRLightPoint } from '../models/signalR-light-point.model';
import { Guid } from 'guid-typescript';
import { Router } from '@angular/router';
import { SignalRClient } from '../../../core/Services/signalR.client';

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
    public signalRLightControlClientService: LightSignalRClient, 
    public signalRClient: SignalRClient,
    private router: Router) { }

  public ngOnInit() {
    
    this.subscription =
      this.signalRLightControlClientService.getMessage().subscribe(message => {
      if (message && 
        message.lightPointCustomName === this.lightPoint.name &&
        message.lightPointNumber === this.lightPoint.bulbNumber
        ) {
        this.lightPoint.status = message.lightPointStatus;
      } 
    }); 
  }
  
  public changeLightStatus(lightPointId: string, status: boolean,lightNumber: number) {
    if(!this.signalRClient.isConnected){
      this.signalRClient.startHubCennection();
    }

    this.signalRLightControlClientService.sendLightPointStatus(lightPointId,status,lightNumber);
    this.lightPoint.status = status;
  }

  public routeToSettings(lightPointId:any){
    this.router.navigate(['/shell/LightPointSettings',lightPointId]);
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
