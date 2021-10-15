import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { ShoppingCartStoreState } from 'src/app/core/state/shopping-cart/models/shopping-cart-store-state';
import { ShoppingCartStore } from 'src/app/core/state/shopping-cart/store/shopping-cart-store';
import { LineItem } from 'src/app/feature/work-order/models/line-item.class';
import { ShoppingCart } from '../../models/shopping-cart.class';
import * as moment from 'moment';
import { environment as env } from '../../../../../environments/environment';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  shoppingCart!: ShoppingCart;
  serviceAddress!: any;
  paymentForm: FormGroup;
  addressForm: FormGroup;
  addressGoogleMapPanel = false;
  addressPanel = false;
  pagar = false;
  inputValidators: any;
  placesOptions = {
    types: [],
    bounds: null,
    fields: null,
    strictBounds: null,
    origin: null,
    componentRestrictions: {
      country: 'MX',
    },
  };

  lat = 51.678418;
  lng = 7.809007;
  zoom = 0;

  constructor(
    private shoppingCartStore: ShoppingCartStore,
    private formBuilder: FormBuilder,
    private toastController: ToastController
  ) {
    this.inputValidators = env.inputValidators;
  }
  /**
   *
   */
  getTotal(): number {
    let total = 0;

    if (this.shoppingCart) {
      this.shoppingCart.workOrder.line_items.forEach((lineItem: LineItem) => {
        total += lineItem.price * lineItem.quantity;
      });
    }

    return total;
  }

  /**
   *
   * @param address
   */
  handleAddressChange(address: Address): void {

    this.lat = address.geometry.location.lat();
    this.lng = address.geometry.location.lng();
    this.serviceAddress = address;
    this.shoppingCart.workOrder.place_id = address.place_id;

    if (!this.shoppingCart.workOrder.place_id && !this.addressForm.valid) {
      this.pagar = false;
    } else {
      this.pagar = true;
    }
  }

  /**
   *
   * @param event
   * @param index
   */
  changeQuantity(event: any, index: number) {
    if (event.detail.value === '0') {
      if (this.shoppingCart.workOrder.line_items.length === 1) {
        this.shoppingCart.workOrder = undefined;
      } else {
        this.shoppingCart.workOrder.line_items.splice(index, 1);
      }
    } else {
      this.shoppingCart.workOrder.line_items[index].quantity =
        event.detail.value;
    }

    this.shoppingCartStore.updateShoppingCart(this.shoppingCart);
  }

  /**
   *
   * @param event
   * @param index
   */
  checkLineItem(event: Event, index: number) {

    const value = parseInt((event as CustomEvent).detail.currentTarget.value, 10);

    if (typeof value !== 'number') {
      return false;
    } else {
      if (value === 0) {
        if (this.shoppingCart.workOrder) {
          this.shoppingCart.workOrder.line_items.splice(index, 1);
        }

        if (!this.shoppingCart.workOrder || (this.serviceAddress.workOrder && this.shoppingCart.workOrder.line_items.length === 0)) {
          this.shoppingCartStore.clearShoppingCart();
        }
      }
    }
  }

  getMinDate(): string {
    return moment().format('YYYY-MM-DD');
  }

  setCurrentLocation(): void {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.zoom = 15;
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }
  }

  ngOnInit(): void {
    this.setCurrentLocation();

    this.shoppingCartStore.state$.subscribe((data: ShoppingCartStoreState) => {
      this.shoppingCart = data.shoppingCart;

      if (!this.shoppingCart) {
        this.toastController
          .create({
            message: 'A&uacute;n no has agregado servicios a tu carrito...',
            position: 'top',
            duration: 5000,
            color: 'primary',
          })
          .then((toast) => {
            toast.present();
          });
      }
    });

    this.createForm();
    this.createAddressForm();

    this.addressForm.valueChanges.subscribe((value) => {
      if (this.addressForm.valid) {
        this.shoppingCart.workOrder.address = this.addressForm.value;
        this.pagar = true;
      } else if (!this.shoppingCart.workOrder.place_id) {
        this.pagar = false;
      }
    });
  }

  private createForm(): void {
    this.paymentForm = this.formBuilder.group({
      appointmentDate: new FormControl('', [
        Validators.compose([Validators.required]),
      ]),
      appointmentTime: new FormControl('', [
        Validators.compose([Validators.required]),
      ]),
    });
  }

  private createAddressForm(): void {
    this.addressForm = this.formBuilder.group({
      calle: new FormControl('', [Validators.compose([Validators.required])]),
      colonia: new FormControl('', [Validators.compose([Validators.required])]),
      noInt: new FormControl('', []),
      noExt: new FormControl('', [Validators.compose([Validators.required])]),
      pais: new FormControl('', [Validators.compose([Validators.required])]),
      estado: new FormControl('', [Validators.compose([Validators.required])]),
      ciudad: new FormControl('', [Validators.compose([Validators.required])]),
      cp: new FormControl('', [Validators.compose([Validators.required])]),
    });
  }
}
