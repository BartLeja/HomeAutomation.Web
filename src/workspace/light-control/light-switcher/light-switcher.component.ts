import { Component, OnInit } from '@angular/core';
import { LightService } from '../services/light-control.service';
import { LocalLightingService } from '../models/local-lighting-service.model';

@Component({
  selector: 'app-light-switcher',
  templateUrl: './light-switcher.component.html',
  styleUrls: ['./light-switcher.component.css']
})
export class LightSwitcherComponent implements OnInit {
  public localLightingService : LocalLightingService; 
 
  constructor(private lightService: LightService ) { 
   }

  ngOnInit() {
    let user = { email: "bleja"};

    let test = this.lightService.getLightingSystemConfiguration('bleja');
    test.subscribe( (res : any ) =>{
        this.localLightingService = res.localLightingService;
        console.log(this.localLightingService.lightPointList);
      });
  }
}
