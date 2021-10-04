import { Component } from '@angular/core';
import {MenuController} from '@ionic/angular';
import { ShoppingCartStoreState } from 'src/app/core/state/shopping-cart/models/shopping-cart-store-state';
import { ShoppingCartStore } from 'src/app/core/state/shopping-cart/store/shopping-cart-store';
import { ShoppingCart } from 'src/app/feature/shopping-cart/models/shopping-cart.class';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public shoppingCart?: ShoppingCart;
  noItems = 0;
    constructor(private menuCtrl: MenuController,     private shoppingCartStore: ShoppingCartStore) {
      this.shoppingCartStore.state$.subscribe((data: ShoppingCartStoreState) => {

        if (data && data.shoppingCart) {
          this.shoppingCart = data.shoppingCart;
        }
      });
    }
  
    getShoppingCartLineItemCount(): void {

      if (!this.shoppingCart || !this.shoppingCart.workOrder) {
        this.noItems = 0;
      } else {
        this.noItems = this.shoppingCart.workOrder.line_items.length;
      }
    }
    
    toggleMenu() {
      this.menuCtrl.toggle();
    }
}
