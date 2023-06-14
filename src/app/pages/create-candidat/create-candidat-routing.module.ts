import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateCandidatPage } from './create-candidat.page';

const routes: Routes = [
  {
    path: '',
    component: CreateCandidatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateCandidatPageRoutingModule {}
