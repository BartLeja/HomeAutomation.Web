import { Component, OnInit, Input, Output, EventEmitter, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../core/Authorization/authentication.service';
import { Router } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { LoginErrorsSnackComponent } from '../login-errors-snack/login-errors-snack.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit, AfterViewInit {
  public mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private elementRef: ElementRef,
              private authService: AuthService,
              private router: Router,
              private changeDetectorRef: ChangeDetectorRef, 
              private media: MediaMatcher,
              private _snackBar: MatSnackBar ) { 
                this.mobileQuery = media.matchMedia('(max-width: 600px)');
                this._mobileQueryListener = () => changeDetectorRef.detectChanges();
                this.mobileQuery.addListener(this._mobileQueryListener);
              }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    //this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = 'linear-gradient(-20deg, #bdc3c7 0%, #2c3e50 100%)';
  }

  submit() {
    // if (this.form.valid) {
    //   this.submitEM.emit(this.form.value);
    // }
    this.authService.login(this.form.value.username,this.form.value.password)
    .subscribe(
      (res) => {
          console.log("User is logged in");
          this.router.navigateByUrl('/shell/LightControl');
      },
      err => {
        console.log('HTTP Error', err)
        this._snackBar.openFromComponent(LoginErrorsSnackComponent, {
          duration:  5000,
        });
      },
    );
  }
  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();
}
