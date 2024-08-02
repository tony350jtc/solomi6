import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformacionRoutingModule } from './informacion-routing.module';

//vista
import { InformacionComponent } from './page/informacion/informacion.component';

//componente incrustable
import { CardComponent } from './component/card/card.component';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    InformacionComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    InformacionRoutingModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    InformacionComponent,
    CardComponent,
    MatButtonModule,
    MatCardModule
  ]
})
export class InformacionModule { }
