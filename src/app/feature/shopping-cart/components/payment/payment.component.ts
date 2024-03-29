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
import { Router } from '@angular/router';


declare const Conekta: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {

  ccForm: FormGroup;
  inputValidators: any;
  loadingFlag = true;

  constructor(
    public listService: ListService,
    private formBuilder: FormBuilder,
    private shoppingCartStore: ShoppingCartStore,
    private apiDataService: ApiDataService,
    private toastController: ToastController,
    private router: Router
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
    this.loadingFlag=false;
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
          name: this.ccForm.controls.first_name.value + this.ccForm.controls.last_name.value,
          exp_year: moment(this.ccForm.controls.exp_year.value).format('YYYY'),
          exp_month: moment(this.ccForm.controls.exp_month.value).format('MM'),
          cvc: this.ccForm.controls.cvc.value
        }
      }, (token: ConektaToken) => {

        this.apiDataService.sendData(`${env.routes.workOrders.payment}`, false, {
          customer: {
            first_name:this.ccForm.controls.first_name.value,
            last_name:this.ccForm.controls.last_name.value,
            email: this.ccForm.controls.email.value,
            phone: this.ccForm.controls.phone.value,
            payment_sources: {
              type: 'card',
              token_id: token.id
            }
          },
          work_order: this.shoppingCartStore.get().workOrder,
          amount: this.shoppingCartStore.getShoppingCartTotal()
        }).subscribe(res => {
          this.loadingFlag = true;

          if ('error' in res ) {
            this.toastController.create({
              message: '&iexcl; Ocurrio un error con el pago.!',
              position: 'top',
              duration: 5000
            }).then(toast => {
              toast.present();

            });
            return;
          }

          if (res.data.payment_status === 'paid') {
            this.shoppingCartStore.clearShoppingCart();
            this.toastController.create({
              message: '&iexcl;Gracias por su pago! Pronto nos pondremos en contacto.',
              position: 'top',
              duration: 7000
            }).then(toast => {
              toast.present();
              this.router.navigate(['home']);
            });
          } else {

            this.toastController.create({
              message: '&iexcl; Ocurrio un error con el pago.! Favor de reportarlo o intete de nuevo.',
              position: 'top',
              duration: 7000
            }).then(toast => {
              toast.present();
            });
          }

        });

      }, (error: any) => {
        this.loadingFlag = true;

        this.toastController.create({
          message: `No hemos podido procesar su pago (error: ${error.message})`,
          position: 'top',
          duration: 5000
        }).then(toast => {
          toast.present();
        });
      });
    } else {
      this.loadingFlag = true;
    }
  }
  
  ngOnInit() {        
    
    Conekta.setPublicKey(env.conekta.publicKey);
    Conekta.setLanguage('es');
    //let userInfo = JSON.parse(localStorage.getItem('user_info'));
    //userInfo.data.first_name + ' ' + userInfo.data.last_name
    this.ccForm = this.formBuilder.group({
      first_name: new FormControl('', [
        Validators.required,
        Validators.pattern(this.inputValidators.name.pattern)
      ]),
      last_name: new FormControl('', [
        Validators.required,
        Validators.pattern(this.inputValidators.name.pattern)
      ]),
      // eslint-disable-next-line id-blacklist
      number: new FormControl('', [
        Validators.required,
        Validators.pattern(this.inputValidators.creditCard.pattern)
      ]),
      cvc: new FormControl('', [Validators.required,Validators.pattern(this.inputValidators.cvc.pattern)]),
      exp_month: new FormControl(moment().format('YYYY'), Validators.required),
      exp_year: new FormControl(moment().format('YYYY'), Validators.required),     
      email: new FormControl('', [Validators.required, Validators.pattern(this.inputValidators.email.pattern)]),
      phone: new FormControl('', [Validators.required])

    });
  }

}
