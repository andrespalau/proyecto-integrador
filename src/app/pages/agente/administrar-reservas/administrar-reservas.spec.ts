import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdministrarReservas } from './administrar-reservas';

describe('AdministrarReservas', () => {
  let component: AdministrarReservas;
  let fixture: ComponentFixture<AdministrarReservas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministrarReservas],
    }).compileComponents();

    fixture = TestBed.createComponent(AdministrarReservas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
