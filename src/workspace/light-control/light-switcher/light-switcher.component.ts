import { Component, OnInit } from '@angular/core';
import { LightService } from '../services/light-control.service';
import { LocalLightingService } from '../models/local-lighting-service.model';
import { resetCompiledComponents } from '@angular/core/src/render3/jit/module';
import { SignalRLightControlClientService } from '../services/signalR-light-control-client.service';

@Component({
  selector: 'app-light-switcher',
  templateUrl: './light-switcher.component.html',
  styleUrls: ['./light-switcher.component.css']
})
export class LightSwitcherComponent implements OnInit {
  public localLightingService : any; 
  public lightPointList : any[];
 
  constructor(private lightService: LightService,
              private signalRLightControlClientService: SignalRLightControlClientService ) { 
   }

  ngOnInit() {

    this.signalRLightControlClientService.signalRClientInit();
    let user = { email: "bleja"};

    // let user = localStorage.getItem('id_token');
    this.signalRLightControlClientService.newConnectionEvent.subscribe(()=>{
      let test = this.lightService.getLightingSystemConfiguration('blejaService')
      .subscribe( (res : any ) =>{
        console.log(res);
          this.lightPointList = res.lightPoints;
        });
    });
    
    let test = this.lightService.getLightingSystemConfiguration('blejaService')
    .subscribe( (res : any ) =>{
      console.log(res);
        this.lightPointList = res.lightPoints;
      });
  }
}
