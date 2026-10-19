import { Component, OnInit } from '@angular/core';
import { Reserva } from '../../../interfaces/reserva';
import { ReservaService } from '../../../services/reserva';

@Component({
  selector: 'app-mis-reservas',
  imports: [],
  templateUrl: './mis-reservas.html',
  styleUrl: './mis-reservas.scss'
})
export class MisReservas implements OnInit {

  reservas: Reserva[] = [];

  constructor(
    private reservaService: ReservaService
  ) {}

  ngOnInit(): void {
    this.reservas = this.reservaService.getReservas();
  }

}