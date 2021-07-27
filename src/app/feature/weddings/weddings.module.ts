import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeddingsRoutingModule } from './weddings-routing.module';
import { WeddingsComponent } from './weddings.component';
import { IonicModule } from '@ionic/angular';
import {FormComponent} from './form/form.component';

@NgModule({
  declarations: [
    WeddingsComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    WeddingsRoutingModule,
    IonicModule
  ]
})
export class WeddingsModule { }
