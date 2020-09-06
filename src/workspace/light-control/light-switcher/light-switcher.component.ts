import { Component, OnInit } from '@angular/core';
import { LightService } from '../services/light-control.service';
import { LocalLightingService } from '../models/local-lighting-service.model';
import { SignalRLightControlClientService } from '../services/signalR-light-control-client.service';
import * as _ from 'lodash';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-light-switcher',
  templateUrl: './light-switcher.component.html',
  styleUrls: ['./light-switcher.component.css']
})
export class LightSwitcherComponent implements OnInit {
  public localLightingService : any; 
  public lightPointList : any;
  public isLoaded = false;
 
  constructor(private lightService: LightService,
              private signalRLightControlClientService: SignalRLightControlClientService ) { 
   }

  ngOnInit() {

    this.signalRLightControlClientService.signalRClientInit();
  
    this.signalRLightControlClientService.newConnectionEvent.subscribe(()=>{
      let test = this.lightService.getLightingSystemConfiguration()
      .subscribe( (res : any ) =>{
          this.lightPointList = _(res.lightPoints).groupBy(
            x=>{
              return x.lightsGroup === null ? 'not grouped' : x.lightsGroup.lightGroupName
            }
              ).map((value, key)=> 
            (
              {
                groupName: key, 
                lightPoint: value, 
                groupId: value[0].lightsGroup ===  null ? null : value[0].lightsGroup.id
              }
            )).value();
        });
    });

    let test = this.lightService.getLightingSystemConfiguration()
    .subscribe( (res : any ) =>{

        // this.lightPointList =  _(res.lightPoints).groupBy(
        //   x=>x.lightsGroup.lightGroupName).map((value, key)=> 
        //   (
        //     {
        //       groupName: key, 
        //       lightPoint: value, 
        //       groupId: value[0].lightsGroup.id 
        //     }
        //   )).value();

        this.lightPointList = _(res.lightPoints).groupBy(
          x=>{
            return x.lightsGroup === null ? 'not grouped' : x.lightsGroup.lightGroupName
          }
            ).map((value, key)=> 
          (
            {
              groupName: key, 
              lightPoint: value, 
              groupId: value[0].lightsGroup ===  null ? null : value[0].lightsGroup.id
            }
          )).value();

        this.isLoaded = true;
        console.log(this.lightPointList);
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
