import { Component, OnInit, Inject } from '@angular/core';
import { LightService } from '../services/light-control.service';
import { LightGroupDto } from '../dtos/light-group.dto';
import { Guid } from 'guid-typescript';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-light-group-dialog',
  templateUrl: './light-group-dialog.component.html',
  styleUrls: ['./light-group-dialog.component.css']
})
export class LightGroupDialogComponent implements OnInit {

  public groupName: string;
  constructor(private lightService: LightService,
   @Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit() {
  }

  public addLightPointToGroup(){
    this.lightService.addLightToGroup({
      id: Guid.create().toString(),
      lightGroupName: this.groupName,
      lightPointId: this.data.lightPointId
    }).subscribe();
  }
}
