import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Se12PageRoutingModule } from './se12-routing.module';

import { Se12Page } from './se12.page';
import { ComponenteModule } from '../../../componente/componente.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Se12PageRoutingModule,
    ComponenteModule
  ],
  declarations: [Se12Page]
})
export class Se12PageModule {}
