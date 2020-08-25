import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatSlideToggleModule,
  MatTreeModule,
} from '@angular/material';

import { LayoutShellRouting } from './layout-shell.routing';
import { LightControlModule } from 'src/workspace/light-control/light-control.module';
import { CoreModule } from 'src/core/core.module';


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
    CoreModule
  
  ]
})
export class LayoutShellModule { }
