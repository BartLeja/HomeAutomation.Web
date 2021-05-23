import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LightService } from '../services/light-control.service';

@Component({
  selector: 'app-rename-light-dialog',
  templateUrl: './rename-light-dialog.component.html',
  styleUrls: ['./rename-light-dialog.component.css']
})
export class RenameLightDialogComponent implements OnInit {
  public name: string;
  
  constructor(private lightService: LightService,
    @Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit() {
  }

  public renameLightPoint(){
    this.lightService.renameLightPoint(
      this.data.lightPointId,
      {name : this.name}
    ).subscribe();
  }

}
