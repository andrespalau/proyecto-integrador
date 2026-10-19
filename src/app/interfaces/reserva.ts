export interface Reserva {
  id: number;
  eventoId: number;
  evento: string;
  cliente: string;
  fecha: string;
  cantidad: number;
  estado: 'Pendiente' | 'Aprobada' | 'Rechazada';
}