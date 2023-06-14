import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateCandidatPageRoutingModule } from './update-candidat-routing.module';

import { UpdateCandidatPage } from './update-candidat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateCandidatPageRoutingModule
  ],
  declarations: [UpdateCandidatPage]
})
export class UpdateCandidatPageModule {}
