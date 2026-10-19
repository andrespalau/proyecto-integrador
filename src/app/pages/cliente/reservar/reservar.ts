import { Component, OnInit } from '@angular/core';
import { Evento } from '../../../interfaces/evento';
import { EventoService } from '../../../services/evento';

@Component({
  selector: 'app-reservar',
  imports: [],
  templateUrl: './reservar.html',
  styleUrl: './reservar.scss'
})
export class Reservar implements OnInit {

  eventos: Evento[] = [];

  constructor(
    private eventoService: EventoService
  ) {}

  ngOnInit(): void {
    this.eventos = this.eventoService.getEventos();
  }

}