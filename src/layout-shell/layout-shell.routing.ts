import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { LightSwitcherComponent } from 'src/workspace/light-control/light-switcher/light-switcher.component';
import { AuthGuard } from 'src/core/Guard/auth.guard';
import { LightPointSettingsComponent } from 'src/workspace/light-control/light-point-settings/light-point-settings.component';
import { SoundControllerComponent } from 'src/workspace/sound-control/sound-controller/sound-controller.component';

const routes: Routes = [
    { 
        path: '',
        redirectTo: 'shell/LightControl',
        pathMatch: 'full',
        canActivate: [AuthGuard]
    },
    {
      path: 'shell', component: LayoutComponent, 
      children :[{
        path: 'LightControl',
        component: LightSwitcherComponent ,  canActivate: [AuthGuard]
      },
      {
        path: 'LightPointSettings/:lightPointNumber',
        component: LightPointSettingsComponent, canActivate: [AuthGuard]
      },
      {
        path: 'SoundControl',
        component: SoundControllerComponent, canActivate: [AuthGuard]
      },
   ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class LayoutShellRouting { }