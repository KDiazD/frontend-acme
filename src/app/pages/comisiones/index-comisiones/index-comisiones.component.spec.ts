import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexComisionesComponent } from './index-comisiones.component';

describe('IndexComisionesComponent', () => {
  let component: IndexComisionesComponent;
  let fixture: ComponentFixture<IndexComisionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexComisionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexComisionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
