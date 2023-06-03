import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { UserPage } from './user.page';

const routes: Routes = [
  {
    path: '',
    component: UserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserPageRoutingModule {}
