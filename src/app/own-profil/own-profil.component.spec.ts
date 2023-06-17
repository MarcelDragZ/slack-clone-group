import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnProfilComponent } from './own-profil.component';

describe('OwnProfilComponent', () => {
  let component: OwnProfilComponent;
  let fixture: ComponentFixture<OwnProfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnProfilComponent]
    });
    fixture = TestBed.createComponent(OwnProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
