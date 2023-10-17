import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAlumnosComponent } from './dialog-alumnos.component';

describe('DialogAlumnosComponent', () => {
  let component: DialogAlumnosComponent;
  let fixture: ComponentFixture<DialogAlumnosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogAlumnosComponent]
    });
    fixture = TestBed.createComponent(DialogAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
