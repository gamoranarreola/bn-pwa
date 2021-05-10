import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { BaseStore } from "src/app/core/state/models/base-state";
import { ShoppingCart } from "src/app/feature/shopping-cart/models/shopping-cart.class";
import { ShoppingCartEndpoint } from "../endpoints/shopping-cart-endpoint.service";
import { ShoppingCartStoreState } from "../models/shopping-cart-store-state";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartStore extends BaseStore<ShoppingCartStoreState> {

  shoppingCart$: Observable<ShoppingCart>;

  constructor(private shoppingCartEndpoint: ShoppingCartEndpoint) {

    super(new ShoppingCartStoreState());

    this.shoppingCart$ = this.state$.pipe(
      map(state => state.shoppingCart!)
    );
  }

  get(): ShoppingCart | undefined {
    return this.state.shoppingCart;
  }

  updateShoppingCart(shoppingCart: ShoppingCart): void {

    this.setState({
      ...this.state,
      shoppingCart: shoppingCart
    });
  }

  clearShoppingCart(): void {

    this.setState({
      ...this.state,
      shoppingCart: {
        workOrder: undefined
      }
    });
  }
}
