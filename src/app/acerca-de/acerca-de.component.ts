import { Component} from '@angular/core';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent{
  customClass = 'accAcercaDe';
  customClass1 = 'accActividades'
}
function vermas(id: String){
  if(id=="mas"){
  document.getElementById("desplegar")!.style.display="block";   
  document.getElementById("mas")!.style.display="none"; 
  }
  else{
  document.getElementById("desplegar")!.style.display="none";
  document.getElementById("mas")!.style.display="inline";
  }
  }