import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from 'src/layout-shell/layout/layout.component';
import { LoginFormComponent } from 'src/user-access/login-form/login-form.component';
import { WelcomePageComponent } from 'src/user-access/welcome-page/welcome-page.component';

const routes: Routes = [
  {
    path: 'shell',
    component: LayoutComponent,
  },
  {
    path: 'login',
    component: WelcomePageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
