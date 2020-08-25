import { Component, OnInit } from '@angular/core';
import { LightService } from '../services/light-control.service';
import { LocalLightingService } from '../models/local-lighting-service.model';
import { SignalRLightControlClientService } from '../services/signalR-light-control-client.service';

@Component({
  selector: 'app-light-switcher',
  templateUrl: './light-switcher.component.html',
  styleUrls: ['./light-switcher.component.css']
})
export class LightSwitcherComponent implements OnInit {
  public localLightingService : any; 
  public lightPointList : any[];
  public isLoaded = false;
 
  constructor(private lightService: LightService,
              private signalRLightControlClientService: SignalRLightControlClientService ) { 
   }

  ngOnInit() {

    this.signalRLightControlClientService.signalRClientInit();
  
    this.signalRLightControlClientService.newConnectionEvent.subscribe(()=>{
      let test = this.lightService.getLightingSystemConfiguration()
      .subscribe( (res : any ) =>{
          this.lightPointList = res.lightPoints;
        });
    });

    let test = this.lightService.getLightingSystemConfiguration()
    .subscribe( (res : any ) =>{

        this.lightPointList = res.lightPoints;
        this.isLoaded = true;
      });
  }
}
