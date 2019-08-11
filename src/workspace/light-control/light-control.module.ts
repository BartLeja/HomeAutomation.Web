import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightSwitcherComponent } from './light-switcher/light-switcher.component';
import { LightCardComponent } from './light-card/light-card.component';

@NgModule({
  declarations: [LightSwitcherComponent, LightCardComponent],
  imports: [
    CommonModule
  ]
})
export class LightControlModule { }
