import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightSwitcherComponent } from './light-switcher/light-switcher.component';
import { LightCardComponent } from './light-card/light-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { LightPointSettingsComponent } from './light-point-settings/light-point-settings.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { LightGroupDialogComponent } from './light-group-dialog/light-group-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { RenameLightDialogComponent } from './rename-light-dialog/rename-light-dialog.component';
import { CoreModule } from '../../core/core.module';

@NgModule({
  declarations: [LightSwitcherComponent, LightCardComponent, LightPointSettingsComponent, LightGroupDialogComponent, RenameLightDialogComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatCheckboxModule,
    MatDialogModule,
    MatInputModule,
    CoreModule,
    FormsModule
  ],
})
export class LightControlModule { }
