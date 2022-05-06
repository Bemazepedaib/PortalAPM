import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasosDenunciaComponent } from './pasos-denuncia.component';

describe('PasosDenunciaComponent', () => {
  let component: PasosDenunciaComponent;
  let fixture: ComponentFixture<PasosDenunciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasosDenunciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasosDenunciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
