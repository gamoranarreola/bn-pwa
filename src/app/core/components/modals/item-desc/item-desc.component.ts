/* eslint-disable @typescript-eslint/naming-convention */
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LineItem } from 'src/app/feature/work-order/models/line-item.class';
import { environment as env } from '../../../../../environments/environment';
import { WorkOrder } from 'src/app/feature/work-order/models/work-order.class';
import { ShoppingCart } from 'src/app/feature/shopping-cart/models/shopping-cart.class';
import { ShoppingCartStore } from 'src/app/core/state/shopping-cart/store/shopping-cart-store';
import { ToastController } from '@ionic/angular';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-item-desc',
  templateUrl: './item-desc.component.html',
  styleUrls: ['./item-desc.component.scss'],
})

export class ItemDescComponent implements OnInit {

  @Input() service: any;s

  requestForm: FormGroup;
  inputValidators: any;
  nomPersonas = 1;
  carritoValidation = true;

  private shoppingCart!: ShoppingCart;

  constructor(
    private modalController: ModalController,
    private shoppingCartStore: ShoppingCartStore,
    private toastController: ToastController,
    private formBuilder: FormBuilder) {

    this.inputValidators = env.inputValidators;
  }

  ngOnInit() {
    this.createForm();

    this.requestForm.valueChanges.subscribe(value => {

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
    this.nomPersonas++;
    this.requestForm.patchValue({ quantity: this.nomPersonas });
  }

  /**
   *
   * @returns
   */
  removePerson() {

    const result = this.nomPersonas - 1;

    if (result < 1) { return; }
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
      service_date: moment(this.requestForm.controls.appointmentDate.value).format('YYYY-MM-DD'),
      service_time: moment(this.requestForm.controls.appointmentTime.value).format('h:mm A'),
      quantity: this.requestForm.controls.quantity.value,
      price: parseInt(this.service.public_price, 10)
    });

    if (!this.shoppingCart || !this.shoppingCart.workOrder) {

      this.shoppingCart = new ShoppingCart({
        workOrder: new WorkOrder({
          request_date: today.format('YYYY-MM-DD'),
          request_time: today.format('h:mm A'),
          notes: this.requestForm.controls.notes.value || 'N/A',

          status: 'initial_request',
          line_items: [lineItem]
        })
      });
    } else {

      let matchingLineItemIndex: number;

      this.shoppingCart.workOrder.line_items.forEach((li: LineItem, index: number) => {

        if (
          li.service.id === lineItem.service.id &&
          li.service_date === lineItem.service_date &&
          li.service_time === lineItem.service_time
        ) {
          matchingLineItemIndex = index;
        }
      });

      if (matchingLineItemIndex >= 0) {
        this.shoppingCart.workOrder.line_items[matchingLineItemIndex].quantity += lineItem.quantity;
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
  createTimeDropdownOptions(): any[] {

    const hours = moment.duration(moment(env.availability.to, 'HH:mm').diff(moment(env.availability.from, 'HH:mm'))).asHours();
    const slots = [];
    const slot = moment(env.availability.from, 'HH:mm');

    for (let i = 0; i <= (hours * 4); i++) {

      if (i !== 0) {
        slot.add(15, 'minutes');
      }

      slots.push(slot.format('h:mm A'));
    }

    return slots;
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
      appointmentDate: new FormControl('', [
        Validators.compose([
          Validators.required
        ])
      ]),
      appointmentTime: new FormControl('', [
        Validators.compose([
          Validators.required
        ])
      ]),
      quantity: new FormControl(1, Validators.required),
      notes: new FormControl('', [
        Validators.compose([
          Validators.pattern(this.inputValidators.textInput.pattern),
        ])
      ])
    });
  }

}
