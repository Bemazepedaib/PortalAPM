import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumeroDeVisitasComponent } from './numero-de-visitas.component';

describe('NumeroDeVisitasComponent', () => {
  let component: NumeroDeVisitasComponent;
  let fixture: ComponentFixture<NumeroDeVisitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumeroDeVisitasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumeroDeVisitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


