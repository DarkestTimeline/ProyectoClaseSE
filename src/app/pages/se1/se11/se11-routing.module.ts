import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Se11Page } from './se11.page';

const routes: Routes = [
  {
    path: '',
    component: Se11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Se11PageRoutingModule {}
