import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Se11PageRoutingModule } from './se11-routing.module';

import { Se11Page } from './se11.page';
import { ComponenteModule } from '../../../componente/componente.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Se11PageRoutingModule,
    ComponenteModule
  ],
  declarations: [Se11Page]
})
export class Se11PageModule {}
