import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCandidatPage } from './list-candidat.page';

const routes: Routes = [
  {
    path: '',
    component: ListCandidatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListCandidatPageRoutingModule {}
