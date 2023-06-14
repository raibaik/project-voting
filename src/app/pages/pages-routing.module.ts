import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesPage } from './pages.page';

const routes: Routes = [
  {
    path: '',
    component: PagesPage
  },
  {
    path: 'list-candidat',
    loadChildren: () => import('./list-candidat/list-candidat.module').then( m => m.ListCandidatPageModule)
  },
  {
    path: 'create-candidat',
    loadChildren: () => import('./create-candidat/create-candidat.module').then( m => m.CreateCandidatPageModule)
  },
  {
    path: 'create-peserta',
    loadChildren: () => import('./create-peserta/create-peserta.module').then( m => m.CreatePesertaPageModule)
  },
  {
    path: 'list-peserta',
    loadChildren: () => import('./list-peserta/list-peserta.module').then( m => m.ListPesertaPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesPageRoutingModule {}
