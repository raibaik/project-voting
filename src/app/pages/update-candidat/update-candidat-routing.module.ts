import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateCandidatPage } from './update-candidat.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateCandidatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateCandidatPageRoutingModule {}
