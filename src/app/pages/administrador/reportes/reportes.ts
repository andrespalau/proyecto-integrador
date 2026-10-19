import { Component, OnInit } from '@angular/core';
import { Reporte } from '../../../interfaces/reporte';
import { ReporteService } from '../../../services/reporte';

@Component({
  selector: 'app-reportes',
  imports: [],
  templateUrl: './reportes.html',
  styleUrl: './reportes.scss'
})
export class Reportes implements OnInit {

  reportes: Reporte[] = [];

  constructor(
    private reporteService: ReporteService
  ) {}

  ngOnInit(): void {
    this.reportes = this.reporteService.getReportes();
  }

}