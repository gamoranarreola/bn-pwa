import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GooglePlaceModule } from 'ngx-google-places-autocomplete';

import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ShoppingCartComponent],
  exports: [ShoppingCartComponent],
  imports: [
    CommonModule,
    IonicModule,
    ShoppingCartRoutingModule,
    GooglePlaceModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ShoppingCartModule { }
