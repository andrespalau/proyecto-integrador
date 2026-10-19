import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuarios: Usuario[] = [
    {
      id: 1,
      nombre: 'Carlos Ramírez',
      correo: 'carlos@email.com',
      rol: 'cliente'
    },
    {
      id: 2,
      nombre: 'Laura Gómez',
      correo: 'laura@email.com',
      rol: 'agente'
    },
    {
      id: 3,
      nombre: 'Administrador',
      correo: 'admin@email.com',
      rol: 'administrador'
    }
  ];

  getUsuarios(): Usuario[] {
    return this.usuarios;
  }
}