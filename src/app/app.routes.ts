import { Routes } from '@angular/router';

import { Login } from './pages/auth/login/login';
import { Registro } from './pages/auth/registro/registro';

import { Eventos } from './pages/cliente/eventos/eventos';
import { Reservar } from './pages/cliente/reservar/reservar';
import { MisReservas } from './pages/cliente/mis-reservas/mis-reservas';

import { RegistrarEvento } from './pages/agente/registrar-evento/registrar-evento';
import { MisEventos } from './pages/agente/mis-eventos/mis-eventos';
import { AdministrarReservas } from './pages/agente/administrar-reservas/administrar-reservas';

import { Reportes } from './pages/administrador/reportes/reportes';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  // AUTH
  {
    path: 'login',
    component: Login
  },
  {
    path: 'registro',
    component: Registro
  },

  // CLIENTE
  {
    path: 'cliente/eventos',
    component: Eventos
  },
  {
    path: 'cliente/reservar',
    component: Reservar
  },
  {
    path: 'cliente/mis-reservas',
    component: MisReservas
  },

  // AGENTE
  {
    path: 'agente/registrar-evento',
    component: RegistrarEvento
  },
  {
    path: 'agente/mis-eventos',
    component: MisEventos
  },
  {
    path: 'agente/administrar-reservas',
    component: AdministrarReservas
  },

  // ADMINISTRADOR
  {
    path: 'administrador/reportes',
    component: Reportes
  },

  // RUTA NO ENCONTRADA
  {
    path: '**',
    redirectTo: 'login'
  }
];