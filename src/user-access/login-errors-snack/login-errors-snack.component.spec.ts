import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginErrorsSnackComponent } from './login-errors-snack.component';

describe('LoginErrorsSnackComponent', () => {
  let component: LoginErrorsSnackComponent;
  let fixture: ComponentFixture<LoginErrorsSnackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginErrorsSnackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginErrorsSnackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
