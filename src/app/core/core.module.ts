import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiDataService } from './services/api-data.service';
import { AuthHeaderService } from './services/auth-header.service';
import { AuthService } from './services/auth.service';
import { LocalStorageService } from './services/local-storage.service';
import { UserService } from './services/user.service';
import { ShoppingCartStore } from './state/shopping-cart/store/shopping-cart-store';
import { ShoppingCartEndpoint } from './state/shopping-cart/endpoints/shopping-cart-endpoint.service';
import { HeaderComponent } from './components/header/header.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    HeaderComponent,
    MainMenuComponent
  ],
  exports: [
    HeaderComponent,
    MainMenuComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  providers: [
    ApiDataService,
    AuthHeaderService,
    AuthService,
    LocalStorageService,
    UserService,
    ShoppingCartStore,
    ShoppingCartEndpoint
  ]
})
export class CoreModule { }
