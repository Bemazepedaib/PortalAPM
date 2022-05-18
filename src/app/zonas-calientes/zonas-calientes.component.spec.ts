import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonasCalientesComponent } from './zonas-calientes.component';

describe('ZonasCalientesComponent', () => {
  let component: ZonasCalientesComponent;
  let fixture: ComponentFixture<ZonasCalientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZonasCalientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonasCalientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
