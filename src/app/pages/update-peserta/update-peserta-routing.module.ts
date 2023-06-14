import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatePesertaPage } from './update-peserta.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatePesertaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatePesertaPageRoutingModule {}
