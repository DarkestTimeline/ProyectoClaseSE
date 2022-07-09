import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Se12Page } from './se12.page';

const routes: Routes = [
  {
    path: '',
    component: Se12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Se12PageRoutingModule {}
