import { Component, OnInit, Input, Output, EventEmitter, ElementRef, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit, AfterViewInit {
  
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private elementRef: ElementRef,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = 'linear-gradient(-20deg, #bdc3c7 0%, #2c3e50 100%)';
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
      }
    );
  }
  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();
}
