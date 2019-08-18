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

  ngOnInit() {
    this.signalRLightControlClientService.signalRClientInit();
  }

  public changeLightStatus() {
    this.signalRLightControlClientService.sendLightPointStatus(0,true,'test');
  }
}
