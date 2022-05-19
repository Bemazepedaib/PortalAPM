import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViolentometroComponent } from './violentometro.component';

describe('ViolentometroComponent', () => {
  let component: ViolentometroComponent;
  let fixture: ComponentFixture<ViolentometroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViolentometroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViolentometroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
