import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zonas-calientes',
  templateUrl: './zonas-calientes.component.html',
  styleUrls: ['./zonas-calientes.component.css']
})
export class ZonasCalientesComponent {
  getCellClass = 'formatoCelda';
  getHeaderClass = 'formatoHeader';
  datos = [{
    'no': '1', 'reportes': '200',
    'clave': '12345', 'institucion': 'Instituto Tecnológico de Tepic',
    'direccion': 'Av. Tecnológico # 2595, Col. Lagos del Country. C.P. 63175',
    'telefono': '(311) 211 94 00'
  }];
  columnas = [{ prop: 'No' }, { name: 'Reportes' }, { name: 'Clave' }, { name: 'Institucion' }, { name: 'Direccion' }, { name: 'Teléfono' }];
}
