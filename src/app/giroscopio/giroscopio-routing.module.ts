import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GiroscopioPage } from './giroscopio.page';

const routes: Routes = [
  {
    path: '',
    component: GiroscopioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GiroscopioPageRoutingModule {}
