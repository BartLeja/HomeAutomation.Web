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
  public product:Array<string>= [''
  // ,'','','','','',''
]
  constructor(private lightService: LightService ) { }

  ngOnInit() {
    let user = { email: "bleja"};

    this.lightService.getLightingSystemConfiguration('bleja').subscribe( (res : LocalLightingService ) =>
      {
        this.localLightingService = res;
        console.log(this.localLightingService);
      }
    )
  }

}
