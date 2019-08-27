import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutShellModule } from 'src/layout-shell/layout-shell.module';
import { MatCardModule } from '@angular/material';
import { UserAccessModule } from 'src/user-access/user-access.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { AuthInterceptor } from 'src/core/Interceptors/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutShellModule,
    UserAccessModule,
    MatCardModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
