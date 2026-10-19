import { Component, OnInit } from '@angular/core';
import { Evento } from '../../../interfaces/evento';
import { EventoService } from '../../../services/evento';

@Component({
  selector: 'app-eventos',
  imports: [],
  templateUrl: './eventos.html',
  styleUrl: './eventos.scss'
})
export class Eventos implements OnInit {

  eventos: Evento[] = [];

  constructor(
    private eventoService: EventoService
  ) {}

  ngOnInit(): void {
    this.eventos = this.eventoService.getEventos();
  }

}