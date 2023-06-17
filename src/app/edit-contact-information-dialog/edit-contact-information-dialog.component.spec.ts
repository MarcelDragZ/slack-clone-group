import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditContactInformationDialogComponent } from './edit-contact-information-dialog.component';

describe('EditContactInformationDialogComponent', () => {
  let component: EditContactInformationDialogComponent;
  let fixture: ComponentFixture<EditContactInformationDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditContactInformationDialogComponent]
    });
    fixture = TestBed.createComponent(EditContactInformationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
