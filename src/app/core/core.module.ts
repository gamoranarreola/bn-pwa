import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiDataService } from './services/api-data.service';
import { AuthHeaderService } from './services/auth-header.service';
import { LocalStorageService } from './services/local-storage.service';
import { ShoppingCartStore } from './state/shopping-cart/store/shopping-cart-store';
import { ShoppingCartEndpoint } from './state/shopping-cart/endpoints/shopping-cart-endpoint.service';
import { HeaderComponent } from './components/header/header.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FooterMenuComponent } from './components/footer-menu/footer-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegionSelectionComponent } from './components/region-selection/region-selection.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';


@NgModule({
  declarations: [
    HeaderComponent,
    MainMenuComponent,
    SideMenuComponent,
    FooterMenuComponent,
    RegionSelectionComponent
  ],
  exports: [
    HeaderComponent,
    MainMenuComponent,
    SideMenuComponent,
    FooterMenuComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ApiDataService,
    AuthHeaderService,
    LocalStorageService,
    ShoppingCartStore,
    ShoppingCartEndpoint
  ]
})
export class CoreModule { }
