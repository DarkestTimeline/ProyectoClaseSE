import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Se2Page } from './se2.page';

const routes: Routes = [
  {
    path: '',
    component: Se2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Se2PageRoutingModule {}
