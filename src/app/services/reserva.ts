import { Injectable } from '@angular/core';
import { Reserva } from '../interfaces/reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  private reservas: Reserva[] = [
    {
      id: 1,
      eventoId: 1,
      evento: 'Festival de Música',
      cliente: 'Carlos Ramírez',
      fecha: '2026-11-15',
      cantidad: 2,
      estado: 'Aprobada'
    },
    {
      id: 2,
      eventoId: 2,
      evento: 'Feria Tecnológica',
      cliente: 'Carlos Ramírez',
      fecha: '2026-11-20',
      cantidad: 1,
      estado: 'Pendiente'
    },
    {
      id: 3,
      eventoId: 3,
      evento: 'Torneo Deportivo',
      cliente: 'María López',
      fecha: '2026-12-05',
      cantidad: 3,
      estado: 'Rechazada'
    }
  ];

  getReservas(): Reserva[] {
    return this.reservas;
  }
}