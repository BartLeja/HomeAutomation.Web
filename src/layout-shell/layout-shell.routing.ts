import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { LightSwitcherComponent } from 'src/workspace/light-control/light-switcher/light-switcher.component';

const routes: Routes = [
    { 
        path: '',
        redirectTo: 'shell',
        pathMatch: 'full'
    },
    {
      path: 'shell', component: LayoutComponent,
      children :[{
        path: 'LightControl',
        component: LightSwitcherComponent 
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