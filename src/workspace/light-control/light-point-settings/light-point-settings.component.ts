import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Guid } from 'guid-typescript';
import { SignalRLightControlClientService } from '../services/signalR-light-control-client.service';

@Component({
  selector: 'app-light-point-settings',
  templateUrl: './light-point-settings.component.html',
  styleUrls: ['./light-point-settings.component.css']
})
export class LightPointSettingsComponent implements OnInit {

  public lightPointId: Guid;
  constructor(private activatedRoute: ActivatedRoute,
    private signalRLightControlClientService: SignalRLightControlClientService,) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
    this.lightPointId = params['lightPointNumber'];
    
      console.log(`${ this.lightPointId}`);
      });
  }

  public resetLightPoint(): void{
    this.signalRLightControlClientService
      .senddRestOfLightPointMessage(this.lightPointId);
  }

  public hardResetLightPoint(): void{
    this.signalRLightControlClientService
    .sendHardRestOfLightPointMessage(this.lightPointId);
  }

}
