import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPesertaPageRoutingModule } from './add-peserta-routing.module';

import { AddPesertaPage } from './add-peserta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPesertaPageRoutingModule
  ],
  declarations: [AddPesertaPage]
})
export class AddPesertaPageModule {}
