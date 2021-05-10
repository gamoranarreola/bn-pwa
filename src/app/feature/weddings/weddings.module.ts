import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeddingsRoutingModule } from './weddings-routing.module';
import { WeddingsComponent } from './weddings.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    WeddingsComponent
  ],
  imports: [
    CommonModule,
    WeddingsRoutingModule,
    IonicModule
  ]
})
export class WeddingsModule { }
