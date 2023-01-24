import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexAsesoresComponent } from './index-asesores.component';

describe('IndexAsesoresComponent', () => {
  let component: IndexAsesoresComponent;
  let fixture: ComponentFixture<IndexAsesoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexAsesoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexAsesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
