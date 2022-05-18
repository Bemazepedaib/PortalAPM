import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zonas-calientes',
  templateUrl: './zonas-calientes.component.html',
  styleUrls: ['./zonas-calientes.component.css']
})
export class ZonasCalientesComponent {
  getCellClass = 'formatoCelda';
  getHeaderClass = 'formatoHeader';
  datos = [{ 'no': '1', 'reportes':'200', 'institucion':'Instituto Tecnológico de Tepic'}];
  columnas = [{ prop: 'No'}, { name: 'Reportes'}, { name: 'Institucion' }];
}
