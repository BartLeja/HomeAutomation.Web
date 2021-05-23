import { Component, OnInit } from '@angular/core';
import { LightService } from '../services/light-control.service';
import { LocalLightingService } from '../models/local-lighting-service.model';
import { SignalRLightControlClientService } from '../services/signalR-light-control-client.service';
import * as _ from 'lodash';
import { Guid } from 'guid-typescript';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-light-switcher',
  templateUrl: './light-switcher.component.html',
  styleUrls: ['./light-switcher.component.css']
})
export class LightSwitcherComponent implements OnInit, OnDestroy {
  public localLightingService : any; 
  public lightPointList : any;
  public isLoaded = false;
  public isCalled = false;
 
  //Za każdym razem jak zmniejszymy tworzy sie instancja serwisu trzeba cos z tym zrobic
  constructor(private lightService: LightService,
              private signalRLightControlClientService: SignalRLightControlClientService ) { 
   }

  ngOnDestroy(): void {
   // throw new Error('Method not implemented.');
  }

  ngOnInit() {
    this.getLights();
    // this.signalRLightControlClientService.signalRClientInit();
    this.signalRLightControlClientService.newConnectionEvent.subscribe((s)=>{
      console.log('Test');
      this.getLights();
    });
    
  }

  private getLights(){
    this.lightService.getLightingSystemConfiguration()
          .subscribe( (res : any ) =>{
              this.lightPointList = _(res.lightPoints).groupBy(
                x=>{
                  return x.lightsGroupName === null ? 'not grouped' : x.lightsGroupName
                }
                  ).map((value, key)=> 
                (
                  {
                    groupName: key, 
                    lightPoint: value, 
                    groupId: value[0].lightsGroupName ===  null ? null : value[0].lightsGroupName
                  }
                )).value();
                this.isLoaded = true;
            });
  }

  public changeStatusOfLightsPointGroup(lightspointGroupId: any,status: boolean){
    this.signalRLightControlClientService.sendLightPointsGroupStatus(lightspointGroupId,status);
    let t=  this.lightPointList
      .filter(lg=>lg.groupId===lightspointGroupId)
      .flatMap(lp=>lp.lightPoint.map(lp=>lp.lightBulbs.map(b=>b.status=status)));

      // t.flatMap(lp=>lp.lightPoint.map(lp=>lp.lightBulbs.map(b=>b.status=status)))
      // .map(lp=>lp.lightPoint.lightBulbModelList
      //   .map(lb=>lb.lightPointStatus = status));
    
        console.log(t);
      
  }
}
