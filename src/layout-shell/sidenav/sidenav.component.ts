import { Component, OnInit, ViewChild, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { MediaMatcher } from '@angular/cdk/layout';
import { SidenavService } from '../services/sidenav.service';
import { SignalRLightControlClientService } from 'src/workspace/light-control/services/signalR-light-control-client.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit, OnDestroy{

  @ViewChild('snav') sidenav: MatSidenav;
  public isConnectedToSignalR = true;
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;
  
  constructor(
      private changeDetectorRef: ChangeDetectorRef, 
      private media: MediaMatcher, 
      private sidenavService: SidenavService,
      public signalRClient : SignalRLightControlClientService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.signalRClient.newConnectionEvent.subscribe(()=>{
      this.isConnectedToSignalR = true;
    });
    document.addEventListener(
      "visibilitychange"
      , () => { 
        if (document.hidden) { 
          console.log("document is hidden");
        }else{
          console.log("document is showing");
          this.isConnectedToSignalR = this.signalRClient.isConnectedToSignR();
          //this.isConnectedToSignR = this.signalRClient.isConnectedToSignRProperty;
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
