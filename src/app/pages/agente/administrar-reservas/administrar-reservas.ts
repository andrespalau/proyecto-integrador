import { Component, OnInit } from '@angular/core';
import { Reserva } from '../../../interfaces/reserva';
import { ReservaService } from '../../../services/reserva';

@Component({
  selector: 'app-administrar-reservas',
  imports: [],
  templateUrl: './administrar-reservas.html',
  styleUrl: './administrar-reservas.scss'
})
export class AdministrarReservas implements OnInit {

  reservas: Reserva[] = [];

  constructor(
    private reservaService: ReservaService
  ) {}

  ngOnInit(): void {
    this.reservas = this.reservaService.getReservas();
  }

}