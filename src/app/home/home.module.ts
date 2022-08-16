import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePageRoutingModule } from './home-routing.module';
import { ItemDescriptionComponent } from '../core/components/modals/item-description/item-description.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { DataDeleteComponent } from './components/data-delete/data-delete.component';
import { HomePageComponent } from './components/home-page/home.page.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    HomePageComponent,
    ItemDescriptionComponent,
    PrivacyComponent,
    DataDeleteComponent
  ],
  entryComponents: [
    ItemDescriptionComponent
  ]
})
export class HomePageModule {}
