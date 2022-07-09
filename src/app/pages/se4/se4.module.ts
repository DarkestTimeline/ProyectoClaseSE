import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Se4PageRoutingModule } from './se4-routing.module';

import { Se4Page } from './se4.page';
import { ServiceService } from 'src/app/service/service.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Se4PageRoutingModule,
    ServiceService
  ],
  declarations: [Se4Page]
})
export class Se4PageModule {}
