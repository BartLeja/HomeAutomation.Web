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
  MatSnackBarModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { LogoComponent } from './logo/logo.component';
import { LoginErrorsSnackComponent } from './login-errors-snack/login-errors-snack.component';

@NgModule({
  declarations: [LoginFormComponent, WelcomePageComponent, LogoComponent, LoginErrorsSnackComponent],
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
    MatSnackBarModule,
    ReactiveFormsModule,
    AngularFittextModule,
  ],
  entryComponents: [LoginErrorsSnackComponent]
})
export class UserAccessModule { }
