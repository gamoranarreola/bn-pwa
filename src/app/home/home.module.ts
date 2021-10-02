import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import {ItemDescComponent} from '../core/components/modals/item-desc/item-desc.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { DataDeleteComponent } from './components/data-delete/data-delete.component';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    HomePage,
    ItemDescComponent,
    PrivacyComponent,
    DataDeleteComponent
  ],
  entryComponents: [ItemDescComponent]
})
export class HomePageModule {}
