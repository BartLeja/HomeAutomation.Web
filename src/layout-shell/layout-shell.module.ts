import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';

import { LayoutShellRouting } from './layout-shell.routing';
import { LightControlModule } from 'src/workspace/light-control/light-control.module';
import { CoreModule } from 'src/core/core.module';
import { SoundControlModule } from 'src/workspace/sound-control/sound-control.module';


@NgModule({
  declarations: [LayoutComponent, SidenavComponent, ToolbarComponent],
  imports: [
    CommonModule,
    LayoutShellRouting,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    MatTreeModule,
    LightControlModule,
    SoundControlModule,
    CoreModule
  
  ]
})
export class LayoutShellModule { }
