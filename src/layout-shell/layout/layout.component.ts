import { Component, OnInit } from '@angular/core';
import { SignalRLightControlClientService } from 'src/workspace/light-control/services/signalR-light-control-client.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  public isConnectedToSignR = true;
  constructor() { }

  ngOnInit() {
  }

}
