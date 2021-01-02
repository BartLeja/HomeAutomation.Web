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
import { CoreModule } from 'src/core/core.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LightSwitcherComponent, LightCardComponent, LightPointSettingsComponent, LightGroupDialogComponent],
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
  entryComponents: [LightGroupDialogComponent]
})
export class LightControlModule { }
