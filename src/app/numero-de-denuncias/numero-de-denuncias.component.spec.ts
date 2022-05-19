import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumeroDeDenunciasComponent } from './numero-de-denuncias.component';

describe('NumeroDeDenunciasComponent', () => {
  let component: NumeroDeDenunciasComponent;
  let fixture: ComponentFixture<NumeroDeDenunciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumeroDeDenunciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumeroDeDenunciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
