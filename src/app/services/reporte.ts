import { Injectable } from '@angular/core';
import { Reporte } from '../interfaces/reporte';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {

  private reportes: Reporte[] = [
    {
      categoria: 'Usuarios registrados',
      cantidad: 120
    },
    {
      categoria: 'Eventos registrados',
      cantidad: 18
    },
    {
      categoria: 'Reservas realizadas',
      cantidad: 245
    },
    {
      categoria: 'Reservas aprobadas',
      cantidad: 190
    }
  ];

  getReportes(): Reporte[] {
    return this.reportes;
  }
}