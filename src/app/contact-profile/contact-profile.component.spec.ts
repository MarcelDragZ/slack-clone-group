import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactProfileComponent } from './contact-profile.component';

describe('ContactProfilComponent', () => {
  let component: ContactProfileComponent;
  let fixture: ComponentFixture<ContactProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactProfileComponent]
    });
    fixture = TestBed.createComponent(ContactProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
