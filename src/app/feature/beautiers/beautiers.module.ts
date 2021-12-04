import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeautiersPageRoutingModule } from './beautiers-routing.module';

import { BeautiersPage } from './beautiers.page';
import {BeautierModalComponent} from './beautier-modal/beautier-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeautiersPageRoutingModule
  ],
  declarations: [BeautiersPage, BeautierModalComponent]
})
export class BeautiersPageModule {}
