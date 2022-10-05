/* eslint-disable @typescript-eslint/naming-convention */
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LineItem } from 'src/app/core/models/line-item.class';
import { environment as env } from '../../../../../environments/environment';
import { ShoppingCart } from 'src/app/feature/shopping-cart/models/shopping-cart.class';
import { ShoppingCartStore } from 'src/app/core/state/shopping-cart/store/shopping-cart-store';
import { ToastController } from '@ionic/angular';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import * as moment from 'moment';
import { WorkOrder } from 'src/app/core/models/work-order.class';


@Component({
  selector: 'app-item-description',
  templateUrl: './item-description.component.html',
  styleUrls: ['./item-description.component.scss'],
})
export class ItemDescriptionComponent implements OnInit {
  @Input() service: any;

  requestForm: FormGroup;
  inputValidators: any;
  nomPersonas = 1;
  carritoValidation = true;
  backgroundImg: any;

  private shoppingCart!: ShoppingCart;

  constructor(
    private modalController: ModalController,
    private shoppingCartStore: ShoppingCartStore,
    private toastController: ToastController,
    private formBuilder: FormBuilder
  ) {
    this.inputValidators = env.inputValidators;
  }

  ngOnInit() {
    this.createForm();

    this.requestForm.valueChanges.subscribe((value) => {
      if (value.appointmentDate !== '' && value.appointmentTime !== '') {
        this.carritoValidation = false;
      } else {
        this.carritoValidation = true;
      }
    });
  }

  /**
   *
   */
  closeModal() {
    this.modalController.dismiss();
  }

  /**
   *
   */
  addPerson() {
    console.log(this.service);
    this.nomPersonas++;
    this.requestForm.patchValue({ quantity: this.nomPersonas });
  }

  /**
   *
   * @returns
   */
  removePerson() {
    const result = this.nomPersonas - 1;

    if (result < 1) {
      return;
    }
    this.nomPersonas = result;
    this.requestForm.patchValue({ quantity: this.nomPersonas });
  }

  /**
   *
   */
  saveToShoppingCart() {
    const today = moment();

    const lineItem = new LineItem({
      service: this.service,
      service_date: moment(
        this.requestForm.controls.appointmentDateTime.value
      ).format('YYYY-MM-DD'),
      service_time: moment(
        this.requestForm.controls.appointmentDateTime.value
      ).format('h:mm A'),
      quantity: this.requestForm.controls.quantity.value,
      price: parseInt(this.service.public_price, 10),
    });

    if (!this.shoppingCart || !this.shoppingCart.workOrder) {
      this.shoppingCart = new ShoppingCart({
        workOrder: new WorkOrder({
          request_date: today.format('YYYY-MM-DD'),
          request_time: today.format('h:mm A'),
          notes: this.requestForm.controls.notes.value || 'N/A',

          status: 'initial_request',
          line_items: [lineItem],
        }),
      });
    } else {
      let matchingLineItemIndex: number;

      this.shoppingCart.workOrder.line_items.forEach(
        (li: LineItem, index: number) => {
          if (
            li.service.id === lineItem.service.id &&
            li.service_date === lineItem.service_date &&
            li.service_time === lineItem.service_time
          ) {
            matchingLineItemIndex = index;
          }
        }
      );

      if (matchingLineItemIndex >= 0) {
        this.shoppingCart.workOrder.line_items[
          matchingLineItemIndex
        ].quantity += lineItem.quantity;
      } else {
        this.shoppingCart.workOrder.line_items.push(lineItem);
      }
    }

    this.shoppingCartStore.updateShoppingCart(this.shoppingCart);
    this.notifyServiceAddedToCart();
  }

  /**
   *
   * @returns
   */
  getMinDate(): string {    
    return moment().format('YYYY-MM-DD');
  }

  notifyServiceAddedToCart() {
    const toast: any = this.toastController.create({
      message: `<p>&iexcl;Gracias! Tu servicio ha sido agregado a tu carrito.</p>`,
      position: 'top',
      duration: 3000,
      color: 'primary',
    });

    this.modalController.dismiss();
    toast.onDidDismiss = () => {
      this.modalController.dismiss();
    };

    toast.then((_toast: any) => {
      _toast.present();
    });
  }

  /**
   *
   */
  private createForm(): void {
    this.requestForm = this.formBuilder.group({
      appointmentDateTime: new FormControl(moment().format('YYYY-MM-DDTHH:mm'), [
        Validators.compose([Validators.required]),
      ]),
      quantity: new FormControl(1, Validators.required),
      notes: new FormControl('', [
        Validators.compose([
          Validators.pattern(this.inputValidators.textInput.pattern),
        ]),
      ]),
    });
  }
}
