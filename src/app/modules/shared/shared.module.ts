import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//componentes locales
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

//importamos para acceder a todas las rutas de la pagina
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  //componentes locales del modulo-> creados por nosotros
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  //archivos, componentes de la web o de otro modulo de los que queremos tener acceso
  /*ej: archivo de rutas(para el navegador), componentes de material que vienen desde el internet
  componentes que bienen desde otro modulo ej:(una card)
  */
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  //expone los componentes locales para que puedan ser mostrados en el resto de la pagina
  //expone componentes de la web para poder tener acceso a ellos en el propio modulo
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
