import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { LightSwitcherComponent } from 'src/workspace/light-control/light-switcher/light-switcher.component';
import { AuthGuard } from 'src/core/Guard/auth.guard';

const routes: Routes = [
    { 
        path: '',
        redirectTo: 'shell',
        pathMatch: 'full',
        canActivate: [AuthGuard]
    },
    {
      path: 'shell', component: LayoutComponent, 
      children :[{
        path: 'LightControl',
        component: LightSwitcherComponent ,  canActivate: [AuthGuard]
      },
      {path: '', redirectTo: 'LightControl', pathMatch: 'full'}
   ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class LayoutShellRouting { }