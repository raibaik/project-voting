import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatePesertaPage } from './create-peserta.page';

const routes: Routes = [
  {
    path: '',
    component: CreatePesertaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatePesertaPageRoutingModule {}
