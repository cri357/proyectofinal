import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './componentes/navbar/nav.component';
import { HeaderComponent } from './componentes/header/header.component';
import { HistoriaComponent } from './componentes/historia/historia.component';
import { PromocionesComponent } from './componentes/promociones/promociones.component';
import { EmpleadosComponent } from './componentes/empleados/empleados.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { VideoComponent } from './componentes/video/video.component';
import { UbicacionComponent } from './componentes/ubicacion/ubicacion.component';
import { CatalogoComponent } from './componentes/catalogo/catalogo.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HistoriaComponent,
    PromocionesComponent,
    VideoComponent,
    EmpleadosComponent,
     FormularioComponent,
     FooterComponent,
     CatalogoComponent,
     UbicacionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: 
  [AppComponent,
  HeaderComponent,
  HistoriaComponent,
  PromocionesComponent,
  VideoComponent,
  EmpleadosComponent,
  FormularioComponent,
  FooterComponent,
  CatalogoComponent,
  UbicacionComponent,
  ]
})
export class AppModule { }
