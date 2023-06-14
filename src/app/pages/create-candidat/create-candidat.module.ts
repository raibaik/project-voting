import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateCandidatPageRoutingModule } from './create-candidat-routing.module';

import { CreateCandidatPage } from './create-candidat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateCandidatPageRoutingModule
  ],
  declarations: [CreateCandidatPage]
})
export class CreateCandidatPageModule {}
