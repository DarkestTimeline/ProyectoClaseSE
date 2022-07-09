import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Se1Page } from './se1.page';

const routes: Routes = [
  {
    path: '',
    component: Se1Page
  },
  {
    path: 'se11',
    loadChildren: () => import('./se11/se11.module').then( m => m.Se11PageModule)
  },
  {
    path: 'se12',
    loadChildren: () => import('./se12/se12.module').then( m => m.Se12PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Se1PageRoutingModule {}
