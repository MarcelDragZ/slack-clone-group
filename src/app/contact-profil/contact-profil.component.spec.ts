import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactProfilComponent } from './contact-profil.component';

describe('ContactProfilComponent', () => {
  let component: ContactProfilComponent;
  let fixture: ComponentFixture<ContactProfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactProfilComponent]
    });
    fixture = TestBed.createComponent(ContactProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
