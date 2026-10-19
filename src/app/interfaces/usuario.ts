export interface Usuario {
  id: number;
  nombre: string;
  correo: string;
  rol: 'cliente' | 'agente' | 'administrador';
}