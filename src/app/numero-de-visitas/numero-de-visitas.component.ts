import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numero-de-visitas',
  templateUrl: './numero-de-visitas.component.html',
  styleUrls: ['./numero-de-visitas.component.css']
})
export class NumeroDeVisitasComponent {
  
  constructor() {
    countvisits();
  }
}
function countvisits() {
  
  fetch('https://api.countapi.xyz/update/PortalApm/violencia/?amount=1')
    .then((res) => res.json())
    .then((res) => {
      document.getElementById("count")!!.innerHTML = res.value;
    });
}
