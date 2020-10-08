import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GiroscopioPageRoutingModule } from './giroscopio-routing.module';

import { GiroscopioPage } from './giroscopio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GiroscopioPageRoutingModule
  ],
  declarations: [GiroscopioPage]
})
export class GiroscopioPageModule {}
