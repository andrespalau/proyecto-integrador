import { Component, OnInit } from '@angular/core';
import { Evento } from '../../../interfaces/evento';
import { EventoService } from '../../../services/evento';

@Component({
  selector: 'app-mis-eventos',
  imports: [],
  templateUrl: './mis-eventos.html',
  styleUrl: './mis-eventos.scss'
})
export class MisEventos implements OnInit {

  eventos: Evento[] = [];

  constructor(
    private eventoService: EventoService
  ) {}

  ngOnInit(): void {
    this.eventos = this.eventoService.getEventos();
  }

}