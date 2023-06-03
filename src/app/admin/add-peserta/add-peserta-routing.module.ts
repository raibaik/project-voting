import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPesertaPage } from './add-peserta.page';

const routes: Routes = [
  {
    path: '',
    component: AddPesertaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPesertaPageRoutingModule {}
