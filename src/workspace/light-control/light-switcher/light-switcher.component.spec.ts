import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightSwitcherComponent } from './light-switcher.component';

describe('LightSwitcherComponent', () => {
  let component: LightSwitcherComponent;
  let fixture: ComponentFixture<LightSwitcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightSwitcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
