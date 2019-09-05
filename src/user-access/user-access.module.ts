import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { UserAccessRouting } from './user-access.routing';
import { AngularFittextModule } from 'angular-fittext';

import {
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatSlideToggleModule,
  MatTreeModule,
  MatCardModule,
  MatInputModule,
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  declarations: [LoginFormComponent, WelcomePageComponent, LogoComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    MatTreeModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    AngularFittextModule,
  ]
})
export class UserAccessModule { }
