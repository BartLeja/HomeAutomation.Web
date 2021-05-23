import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenameLightDialogComponent } from './rename-light-dialog.component';

describe('RenameLightDialogComponent', () => {
  let component: RenameLightDialogComponent;
  let fixture: ComponentFixture<RenameLightDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenameLightDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenameLightDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
