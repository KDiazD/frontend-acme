import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAsesoresComponent } from './form-asesores.component';

describe('FormAsesoresComponent', () => {
  let component: FormAsesoresComponent;
  let fixture: ComponentFixture<FormAsesoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAsesoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAsesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
