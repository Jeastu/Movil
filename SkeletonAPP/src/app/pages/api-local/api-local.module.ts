import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApiLocalPageRoutingModule } from './api-local-routing.module';

import { ApiLocalPage } from './api-local.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApiLocalPageRoutingModule
  ],
  declarations: [ApiLocalPage]
})
export class ApiLocalPageModule {}
