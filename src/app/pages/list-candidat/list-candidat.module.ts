import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListCandidatPageRoutingModule } from './list-candidat-routing.module';

import { ListCandidatPage } from './list-candidat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListCandidatPageRoutingModule
  ],
  declarations: [ListCandidatPage]
})
export class ListCandidatPageModule {}
