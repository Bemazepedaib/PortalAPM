import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormularioDenunciaComponent } from './formulario-denuncia/formulario-denuncia.component';
import { PasosDenunciaComponent } from './pasos-denuncia/pasos-denuncia.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { FooterComponent } from './footer/footer.component';
import { ZonasCalientesComponent } from './zonas-calientes/zonas-calientes.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NumeroDeVisitasComponent } from './numero-de-visitas/numero-de-visitas.component';
import { TiposViolenciaComponent } from './tipos-violencia/tipos-violencia.component';
import { NumeroDeDenunciasComponent } from './numero-de-denuncias/numero-de-denuncias.component';
import { CountUpModule } from 'ngx-countup';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormularioDenunciaComponent,
    PasosDenunciaComponent,
    AcercaDeComponent,
    FooterComponent,
    ZonasCalientesComponent,
    NumeroDeVisitasComponent,
    TiposViolenciaComponent,
    NumeroDeDenunciasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccordionModule.forRoot(),
    TabsModule.forRoot(),
    CarouselModule.forRoot(),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    NgxDatatableModule,
    CountUpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
