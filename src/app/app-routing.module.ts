import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /*{
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },*/
  {
    path: '',
    redirectTo: 'principal',
    pathMatch: 'full'
  },
  {
    path: 'principal',
    loadChildren: () => import('./pages/principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'se1',
    loadChildren: () => import('./pages/se1/se1.module').then( m => m.Se1PageModule)
  },
  {
    path: 'se2',
    loadChildren: () => import('./pages/se2/se2.module').then( m => m.Se2PageModule)
  },
  {
    path: 'se3',
    loadChildren: () => import('./pages/se3/se3.module').then( m => m.Se3PageModule)
  },
  {
    path: 'se4',
    loadChildren: () => import('./pages/se4/se4.module').then( m => m.Se4PageModule)
  },
  {
    path: 'ab',
    loadChildren: () => import('./pages/ab/ab.module').then( m => m.AbPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
