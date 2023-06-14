import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatePesertaPageRoutingModule } from './update-peserta-routing.module';

import { UpdatePesertaPage } from './update-peserta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatePesertaPageRoutingModule
  ],
  declarations: [UpdatePesertaPage]
})
export class UpdatePesertaPageModule {}
