import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApiExternaPage } from './api-externa.page';

const routes: Routes = [
  {
    path: '',
    component: ApiExternaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApiExternaPageRoutingModule {}
