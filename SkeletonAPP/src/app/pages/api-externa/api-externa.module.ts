import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApiExternaPageRoutingModule } from './api-externa-routing.module';

import { ApiExternaPage } from './api-externa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApiExternaPageRoutingModule
  ],
  declarations: [ApiExternaPage]
})
export class ApiExternaPageModule {}
