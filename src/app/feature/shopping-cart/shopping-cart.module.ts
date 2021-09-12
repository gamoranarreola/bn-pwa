import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { AgmCoreModule} from '@agm/core';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentComponent } from './components/payment/payment.component';
import { IonIntlTelInputModule } from 'ion-intl-tel-input';


@NgModule({
  declarations: [
    ShoppingCartComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ShoppingCartRoutingModule,
    GooglePlaceModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB4WlYWvD5eaLGWxNTkQl4SJBsmaX6IBIk',
      libraries:['places']
    }),
    FormsModule,
    ReactiveFormsModule,
    IonIntlTelInputModule
  ]
})
export class ShoppingCartModule { }
