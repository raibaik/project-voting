import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatePesertaPageRoutingModule } from './create-peserta-routing.module';

import { CreatePesertaPage } from './create-peserta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatePesertaPageRoutingModule
  ],
  declarations: [CreatePesertaPage]
})
export class CreatePesertaPageModule {}
