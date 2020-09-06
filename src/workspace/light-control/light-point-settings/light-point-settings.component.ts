import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Guid } from 'guid-typescript';
import { SignalRLightControlClientService } from '../services/signalR-light-control-client.service';
import { MatDialog } from '@angular/material';
import { LightGroupDialogComponent } from '../light-group-dialog/light-group-dialog.component';
import { LightService } from '../services/light-control.service';

@Component({
  selector: 'app-light-point-settings',
  templateUrl: './light-point-settings.component.html',
  styleUrls: ['./light-point-settings.component.css']
})
export class LightPointSettingsComponent implements OnInit {

  public lightPointId: Guid;
  constructor(private activatedRoute: ActivatedRoute,
    private signalRLightControlClientService: SignalRLightControlClientService,
    public dialog: MatDialog, private lightService: LightService ) { }

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

  public removeLightPointFromGroup(){
    this.lightService.removeLightFromGroup(this.lightPointId).subscribe();
  }
  
  public openDialog() {
    const dialogRef = this.dialog.open(
      LightGroupDialogComponent,{
        data: { lightPointId: this.lightPointId }
      }
     );

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
