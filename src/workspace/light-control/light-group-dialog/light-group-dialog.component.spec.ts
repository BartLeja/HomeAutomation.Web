import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightGroupDialogComponent } from './light-group-dialog.component';

describe('LightGroupDialogComponent', () => {
  let component: LightGroupDialogComponent;
  let fixture: ComponentFixture<LightGroupDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightGroupDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightGroupDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
