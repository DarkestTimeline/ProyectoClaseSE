import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbPage } from './ab.page';

const routes: Routes = [
  {
    path: '',
    component: AbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbPageRoutingModule {}
