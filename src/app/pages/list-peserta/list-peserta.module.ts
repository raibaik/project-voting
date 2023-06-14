import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListPesertaPageRoutingModule } from './list-peserta-routing.module';

import { ListPesertaPage } from './list-peserta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListPesertaPageRoutingModule
  ],
  declarations: [ListPesertaPage]
})
export class ListPesertaPageModule {}
