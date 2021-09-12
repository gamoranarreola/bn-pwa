import { Component, Input, OnChanges } from '@angular/core';
import { IonInput, ModalController } from '@ionic/angular';
import { LineItem } from 'src/app/feature/work-order/models/line-item.class';
import { WorkOrder } from 'src/app/feature/work-order/models/work-order.class';
import { ShoppingCart } from 'src/app/feature/shopping-cart/models/shopping-cart.class';
import { ShoppingCartStoreState } from 'src/app/core/state/shopping-cart/models/shopping-cart-store-state';
import { ShoppingCartStore } from 'src/app/core/state/shopping-cart/store/shopping-cart-store';
import { LoadingController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-item-desc',
  templateUrl: './item-desc.component.html',
  styleUrls: ['./item-desc.component.scss'],
})
export class ItemDescComponent implements OnChanges {
@Input() service: any;
private shoppingCart!: ShoppingCart;
nomPersonas = 0;
  constructor(
    private mtrl: ModalController,
    private shoppingCartStore: ShoppingCartStore,
    private loadingController: LoadingController,
    private toastController: ToastController,) { 

   console.log('modal',this.service);
  }
  ngOnChanges() {
    console.log('sadasdasdasd',this.service); 
  }
  cerrarModal() {
    
    this.mtrl.dismiss();
  }

  addPerson() {
    console.log('sadasdasdasd',this.service); 
    this.nomPersonas++;
  }
  removePerson() {
    let result = this.nomPersonas -1;
    
    if(result < 0) { result = 0;}  ;
    this.nomPersonas = result;
  }

  saveToShoppingCart() {
    console.log('adding service to cart');
    const lineItem = new LineItem({
      service: this.service,
      service_date: '',
      service_time: '',
      quantity:  this.nomPersonas,
      price: this.service.public_price
    });

    if (!this.shoppingCart || !this.shoppingCart.workOrder) {

      this.shoppingCart = new ShoppingCart({
        workOrder: new WorkOrder({
          request_date: '',
          request_time: '',
          notes: 'N/A',
          status: 'initial_request',
          line_items: [lineItem]
        })
      });
    } else  {
      this.shoppingCart.workOrder.line_items.push(lineItem);
    }
    console.log('adding choping cart: ',this.shoppingCart);
    this.shoppingCartStore.updateShoppingCart(this.shoppingCart);
    this.notifyServiceAddedToCart();

  }

    /**
   *
   */
     private notifyServiceAddedToCart(): void {

      const toast: any = this.toastController.create({
        message: `<p>&iexcl;Gracias! Tu servicio ha sido agregado a tu carrito.</p>`,
        position: 'bottom',
        duration: 3000
      });
      this.mtrl.dismiss();
      toast.onDidDismiss = () => {
        this.mtrl.dismiss();
      };
  
      toast.then((_toast: any) => {
        _toast.present();
      });
    }

}
