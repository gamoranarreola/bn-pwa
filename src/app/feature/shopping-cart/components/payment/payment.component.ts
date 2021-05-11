/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';

import { environment as env } from '../../../../../environments/environment';

declare const Conekta: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    Conekta.setPublicKey(env.conekta.publicKey);
    Conekta.setLanguage('es');
  }

}
