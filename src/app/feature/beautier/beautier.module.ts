import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeautierRoutingModule } from './beautier-routing.module';
import { BeautierModalComponent } from './components/beautier-modal/beautier-modal.component';
import { BeautierWorkComponent } from './components/beautier-work/beautier-work.component';
import { BeautiersListComponent } from './components/beautiers-list/beautiers-list.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeautierRoutingModule
  ],
  declarations: [
    BeautiersListComponent,
    BeautierModalComponent,
    BeautierWorkComponent
  ]
})
export class BeautierModule {}
