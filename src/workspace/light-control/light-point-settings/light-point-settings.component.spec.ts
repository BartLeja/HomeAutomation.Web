import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightPointSettingsComponent } from './light-point-settings.component';

describe('LightPointSettingsComponent', () => {
  let component: LightPointSettingsComponent;
  let fixture: ComponentFixture<LightPointSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightPointSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightPointSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
