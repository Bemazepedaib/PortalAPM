import { Component} from '@angular/core';

@Component({
  selector: 'app-pasos-denuncia',
  templateUrl: './pasos-denuncia.component.html',
  styleUrls: ['./pasos-denuncia.component.css']
})
export class PasosDenunciaComponent{
  isFirstOpen = true
  oneAtATime = true
  customClass = 'customClass'
}
