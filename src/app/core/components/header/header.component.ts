import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/core/services/auth.service';
import { ShoppingCartStoreState } from 'src/app/core/state/shopping-cart/models/shopping-cart-store-state';
import { ShoppingCartStore } from 'src/app/core/state/shopping-cart/store/shopping-cart-store';
import { ShoppingCart } from 'src/app/feature/shopping-cart/models/shopping-cart.class';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  public shoppingCart?: ShoppingCart;

  constructor(
    private shoppingCartStore: ShoppingCartStore,
    private toastController: ToastController,
    public authService: AuthService
  ) { }

  getShoppingCartLineItemCount(): number {

    if (!this.shoppingCart || !this.shoppingCart.workOrder) {
      return 0;
    } else {
      return this.shoppingCart.workOrder.line_items.length;
    }
  }

  ngOnInit() {

    this.shoppingCartStore.state$.subscribe((data: ShoppingCartStoreState) => {

      if (data && data.shoppingCart) {
        this.shoppingCart = data.shoppingCart;
      }
    });
  }

}
