import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApiLocalPage } from './api-local.page';

const routes: Routes = [
  {
    path: '',
    component: ApiLocalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApiLocalPageRoutingModule {}
