import { Component, OnInit, Input } from '@angular/core';
import { SignalRLightControlClientService } from '../services/signalR-light-control-client.service';

@Component({
  selector: 'app-light-card',
  templateUrl: './light-card.component.html',
  styleUrls: ['./light-card.component.css']
})
export class LightCardComponent implements OnInit {

  constructor(private signalRLightControlClientService :SignalRLightControlClientService ) { }
  @Input() product;
  public isLightOn = false;

  ngOnInit() {
    this.signalRLightControlClientService.signalRClientInit();
  }

  public changeLightStatus(status: boolean) {
    this.signalRLightControlClientService.sendLightPointStatus(0,status,'Test2');
    this.isLightOn = status;
  }
}
