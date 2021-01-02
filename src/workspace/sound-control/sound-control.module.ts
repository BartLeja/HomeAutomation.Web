import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoundControllerComponent } from './sound-controller/sound-controller.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [SoundControllerComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class SoundControlModule { }
