import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetStatusDialogComponent } from './set-status-dialog.component';

describe('SetStatusDialogComponent', () => {
  let component: SetStatusDialogComponent;
  let fixture: ComponentFixture<SetStatusDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetStatusDialogComponent]
    });
    fixture = TestBed.createComponent(SetStatusDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
