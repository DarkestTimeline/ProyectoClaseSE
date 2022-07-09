import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Se1PageRoutingModule } from './se1-routing.module';

import { Se1Page } from './se1.page';
import { ComponenteModule } from 'src/app/componente/componente.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Se1PageRoutingModule,
    // Importar el modulo header personalizado
    ComponenteModule
  ],
  declarations: [Se1Page]
})
export class Se1PageModule {}
