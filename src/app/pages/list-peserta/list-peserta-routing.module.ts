import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListPesertaPage } from './list-peserta.page';

const routes: Routes = [
  {
    path: '',
    component: ListPesertaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListPesertaPageRoutingModule {}
