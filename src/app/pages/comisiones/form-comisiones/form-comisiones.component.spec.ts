import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComisionesComponent } from './form-comisiones.component';

describe('FormComisionesComponent', () => {
  let component: FormComisionesComponent;
  let fixture: ComponentFixture<FormComisionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormComisionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComisionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
