/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import * as moment from 'moment';

import { environment as env } from '../../../../../environments/environment';
import { ListService } from 'src/app/core/services/list.service';
import { ToastController } from '@ionic/angular';
import { ShoppingCartStore } from 'src/app/core/state/shopping-cart/store/shopping-cart-store';
import { ConektaToken } from '../../models/conekta-token';
import { ApiDataService } from 'src/app/core/services/api-data.service';


declare const Conekta: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {

  ccForm: FormGroup;
  inputValidators: any;

  constructor(
    private formBuilder: FormBuilder,
    private shoppingCartStore: ShoppingCartStore,
    private apiDataService: ApiDataService,
    public listService: ListService,
    private toastController: ToastController
  ) {
    this.inputValidators = env.inputValidators;
  }

  getMinYear(): string {
    return moment().format('YYYY');
  }

  getMaxYear(): string {
    return moment().add(5, 'years').format('YYYY');
  }

  async submitPayment() {

    let brand: string;
    const isValidNumber = Conekta.card.validateNumber(this.ccForm.controls.number.value);
    // eslint-disable-next-line max-len
    const isValidExpDate = Conekta.card.validateExpirationDate(moment(this.ccForm.controls.exp_month.value).format('MM'), moment(this.ccForm.controls.exp_year.value).format('YYYY'));
    const isValidCVC = Conekta.card.validateCVC(this.ccForm.controls.cvc.value);

    if (isValidNumber && isValidExpDate && isValidCVC) {

      brand = Conekta.card.getBrand(this.ccForm.controls.number.value);

      Conekta.Token.create({
        card: {
          // eslint-disable-next-line id-blacklist
          number: this.ccForm.controls.number.value,
          name: this.ccForm.controls.name.value,
          exp_year: moment(this.ccForm.controls.exp_year.value).format('YYYY'),
          exp_month: moment(this.ccForm.controls.exp_month.value).format('MM'),
          cvc: this.ccForm.controls.cvc.value
        }
      }, (token: ConektaToken) => {

        this.apiDataService.sendData(`${env.routes.workOrders.payment}`, true, {
          customer: {
            name: this.ccForm.controls.name.value,
            payment_sources: [{
              type: 'card',
              token_id: token.id
            }]
          },
          work_order: this.shoppingCartStore.get().workOrder,
          amount: this.shoppingCartStore.getShoppingCartTotal()
        }).subscribe(res => {

          this.toastController.create({
            message: '&iexcl;Gracias por su pago!',
            position: 'top',
            duration: 5000
          }).then(toast => {
            toast.present();
          });
        });
      }, (error: any) => {

        this.toastController.create({
          message: `No hemos podido procesar su pago (error: ${error.message})`,
          position: 'top',
          duration: 5000
        }).then(toast => {
          toast.present();
        });
      });
    }
  }

  ngOnInit() {

    Conekta.setPublicKey(env.conekta.publicKey);
    Conekta.setLanguage('es');

    this.ccForm = this.formBuilder.group({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern(this.inputValidators.name.pattern)
      ]),
      // eslint-disable-next-line id-blacklist
      number: new FormControl('', [
        Validators.required,
        Validators.pattern(this.inputValidators.creditCard.pattern)
      ]),
      cvc: new FormControl('', [
        Validators.required,
        Validators.pattern(this.inputValidators.cvc.pattern)
      ]),
      exp_month: new FormControl('', Validators.required),
      exp_year: new FormControl('', Validators.required),

      /**
       * modifico: Joel Dorado
       * Desc: removi los campos para pedir menos datos al cliente,
       * ( hice pruebas y si funciona el proceso de la tarjeta, me regregasa el token valido para enviar al api)
       * */
      // street1: new FormControl('', Validators.required),
      // street2: new FormControl(''),
      // city: new FormControl('', Validators.required),
      // state: new FormControl('', Validators.required),
      // zip: new FormControl('', Validators.required),
      // country: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      // phone: new FormControl('', [
      //   Validators.required,
      //   IonIntlTelInputValidators.phone
      // ])
      
    });
  }

}
