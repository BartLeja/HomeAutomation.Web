import { Component, OnInit, ViewChild, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MediaMatcher } from '@angular/cdk/layout';
import { SidenavService } from '../services/sidenav.service';
import { SignalRClient } from '../../core/Services/signalR.client';
import { LightSignalRClient } from '../../workspace/light-control/services/signalR.client';
import { SoundSignalRClient } from '../../workspace/sound-control/services/signalR.client';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit, OnDestroy{

  @ViewChild('snav', { static: true }) sidenav: MatSidenav;
  public isConnectedToSignalR = true;
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;
  
  constructor(
      private changeDetectorRef: ChangeDetectorRef, 
      private media: MediaMatcher, 
      private sidenavService: SidenavService,
      public signalRClient : SignalRClient,
      public lightSignalRClient : LightSignalRClient,
      public soundSignalRClient: SoundSignalRClient) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    
    this.signalRClient.signalRClientInit();
    this.lightSignalRClient.signalRClientInit();
    this.soundSignalRClient.signalRClientInit();

    this.signalRClient.newConnectionEvent.subscribe(()=>{
      this.isConnectedToSignalR = true;
    });

    document.addEventListener(
      "visibilitychange"
      , () => { 
        if (document.hidden) { 
          this.isConnectedToSignalR = false;
          console.log("document is hidden");
        }else{
          console.log("document is showing");
          this.isConnectedToSignalR = this.signalRClient.isConnected();
          if(!this.isConnectedToSignalR){
            this.signalRClient.startHubCennection();
          }
        }
      }
    );
   }
 
  ngOnInit() {
    this.sidenavService.sidenavInit(this.sidenav);
  }
  
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
