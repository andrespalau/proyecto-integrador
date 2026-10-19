import { Injectable } from '@angular/core';
import { Evento } from '../interfaces/evento';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  private eventos: Evento[] = [
    {
      id: 1,
      nombre: 'Festival de Música',
      descripcion: 'Evento musical con artistas invitados y presentaciones en vivo.',
      fecha: '2026-11-15',
      hora: '18:00',
      lugar: 'Centro de Eventos',
      capacidad: 300,
      disponibles: 120,
      agente: 'Laura Gómez'
    },
    {
      id: 2,
      nombre: 'Feria Tecnológica',
      descripcion: 'Exposición de proyectos, innovación y nuevas tecnologías.',
      fecha: '2026-11-20',
      hora: '09:00',
      lugar: 'Auditorio Principal',
      capacidad: 200,
      disponibles: 85,
      agente: 'Laura Gómez'
    },
    {
      id: 3,
      nombre: 'Torneo Deportivo',
      descripcion: 'Jornada deportiva con diferentes competencias y actividades.',
      fecha: '2026-12-05',
      hora: '08:00',
      lugar: 'Unidad Deportiva',
      capacidad: 150,
      disponibles: 40,
      agente: 'Laura Gómez'
    }
  ];

  getEventos(): Evento[] {
    return this.eventos;
  }
}