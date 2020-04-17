import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightSwitcherComponent } from './light-switcher/light-switcher.component';
import { LightCardComponent } from './light-card/light-card.component';
import { MatCardModule,  MatButtonModule, MatIconModule, } from '@angular/material';
import { LightPointSettingsComponent } from './light-point-settings/light-point-settings.component';


@NgModule({
  declarations: [LightSwitcherComponent, LightCardComponent, LightPointSettingsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class LightControlModule { }
