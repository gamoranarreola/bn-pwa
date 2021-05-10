import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { LoadingController, ToastController } from '@ionic/angular';
import * as moment from 'moment';

import { environment as env } from '../../../../../environments/environment';
import { ApiDataService } from 'src/app/core/services/api-data.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { Beautier } from 'src/app/feature/beautier/models/beautier.class';
import { Service } from 'src/app/feature/service/models/service.class';
import { Calendar } from '../../models/calendar.class';
import { UserService } from 'src/app/core/services/user.service';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { LineItem } from 'src/app/feature/work-order/models/line-item.class';
import { WorkOrder } from 'src/app/feature/work-order/models/work-order.class';
import { Router } from '@angular/router';
import { ShoppingCart } from 'src/app/feature/shopping-cart/models/shopping-cart.class';
import { ShoppingCartStoreState } from 'src/app/core/state/shopping-cart/models/shopping-cart-store-state';
import { ShoppingCartStore } from 'src/app/core/state/shopping-cart/store/shopping-cart-store';

@Component({
  selector: 'app-appointment-request',
  templateUrl: './appointment-request.component.html',
  styleUrls: ['./appointment-request.component.scss'],
})
export class AppointmentRequestComponent implements OnInit {

  @Input() service: Service;
  @Input() qualifiedBeautiers: Beautier[];

  calendars: Calendar[] = [];
  today: moment.Moment;
  startDate: moment.Moment;
  endDate: moment.Moment;
  serviceAddress: any;

  placesOptions: {
    componentRestrictions: {
      country: string;
    }
  };

  requestForm: FormGroup;
  inputValidators: any;
  beautiersAvailable = false;
  availabilityChecked = false;

  private loading: any;
  private shoppingCart!: ShoppingCart;

  constructor(
    private apiDataService: ApiDataService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private toastController: ToastController,
    private router: Router,
    private loadingController: LoadingController,
    private shoppingCartStore: ShoppingCartStore
  ) {

    this.inputValidators = env.inputValidators;
    this.serviceAddress = null;

    this.placesOptions = {
      componentRestrictions: {
        country: 'MX'
      }
    };
  }

  /**
   *
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
   */
  checkAvailability(): void {

    /**
     * Must be logged in to check
     * availability.
     */
    if (this.authService.isAuthenticated()) {

      this.presentLoading();

      // Make sure both appointmentDate and appointmentTime form controls have selected values.
      if (this.requestForm.controls.appointmentDate.value && this.requestForm.controls.appointmentTime.value){
        this.loadCalendars();
      }
    } else {
      this.notifyRegistration();
    }
  }

  /**
   *
   */
  public saveToShoppingCart(): void {

    const today = moment();

    const lineItem = new LineItem({
      service: this.service,
      service_date: moment(this.requestForm.controls.appointmentDate.value).format('YYYY-MM-DD'),
      service_time: moment(this.requestForm.controls.appointmentTime.value).format('h:mm A'),
      quantity: this.requestForm.controls.quantity.value,
      price: this.service.public_price,
      status: 'initial_request'
    });

    if (!this.shoppingCart) {

      this.shoppingCart = new ShoppingCart({
        workOrder: new WorkOrder({
          request_date: today.format('YYYY-MM-DD'),
          request_time: today.format('h:mm A'),
          notes: this.requestForm.controls.notes.value || 'N/A',
          line_items: [lineItem]
        })
      });
    } else {
      this.shoppingCart.workOrder.line_items.push(lineItem);
    }

    this.shoppingCartStore.updateShoppingCart(this.shoppingCart);
    this.notifyServiceAddedToCart();
    this.resetForm();
    this.router.navigate(['service-categories']);
  }

  /**
   *
   * @param address
   */
  handleAddressChange(address: Address): void {
    this.serviceAddress = address;
  }

  /**
   *
   */
  getMinDate(): string {
    return moment().format('YYYY-MM-DD');
  }

  ngOnInit() {

    this.createForm();

    this.shoppingCartStore.state$.subscribe((data: ShoppingCartStoreState) => {
      this.shoppingCart = data.shoppingCart!;
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

  /**
   *
   */
  private resetForm(): void {
    this.requestForm.reset();
    this.serviceAddress = null;
    this.beautiersAvailable = false;
    this.availabilityChecked = false;
  }

  /**
   *
   */
  private loadCalendars(): void {

    const today = moment();

    /**
     * Extract requested date and time from request form.
     */
    const requestedDate = moment(this.requestForm.controls.appointmentDate.value).format('YYYY-MM-DD');
    const requestedTime = moment(this.requestForm.controls.appointmentTime.value, 'h:mm A').format('HH:mm:ssZ');

    // Joins the requestedDate and requestedTime to form startDate.
    this.startDate = moment(`${requestedDate} ${requestedTime}`, 'YYYY-MM-DD h:mm A');

    /**
     * Adds the duration of the requested service to the startDate to get endDate. Both startDate and
     * endDate are required by Google in order to check calendar availability.
     */
    this.endDate = moment(this.startDate).add(moment.duration(this.service.duration).asMinutes(), 'm');

    /**
     * startDate must occur after the current date and time as well as be within a 4-hour window.
     */
    if (this.startDate.isAfter(today) && moment.duration(this.startDate.diff(today)).asHours() > 4) {

      this.calendars = [];
      this.beautiersAvailable = false;
      this.availabilityChecked = false;

      this.apiDataService.readData(env.routes.calendars.getCalendarForBeautiers, false, 'post', {
        calendarIds: this.qualifiedBeautiers.map((beautier: Beautier) => beautier.calendar_id),
        timeMin: this.startDate.format(),
        timeMax: this.endDate.format(),
        custom_user_id: this.userService.getCurrentUser().id
      }).subscribe(response => {

        this.calendars = response.data.map(calendar => new Calendar(calendar));

        if (this.calendars.length  === 0) {
          this.availabilityChecked = true;
        }

        this.calendars.map((calendar: Calendar) => {

          if (calendar.free_busy.busy.length === 0) {
            this.beautiersAvailable = true;
          } else {
            this.beautiersAvailable = false;
          }

          this.availabilityChecked = true;
        });

        this.loading.dismiss();
      });
    } else {
      this.notifyExpediteRequest();
    }
  }

  /**
   *
   */
  private notifyExpediteRequest(): void {

    this.toastController.create({
      message: 'El margen regular para agendar servicio es de un m&iacute;mino de 4 horas. Si necesitas un servicio dentro de un margen menor, puedes llamarnos al (664) 999-9999 y haremos lo posible por conseguirte un beautier.',
      position: 'bottom',
      buttons: [
        {
          text: 'Cerrar',
          role: 'cancel'
        }
      ]
    }).then(toast => {
      toast.present();
    })
  }

  /**
   *
   */
  private notifyRegistration(): void {

    this.toastController.create({
      message: `<p>Para poder agendar un beautier para tu servicio, es necesario registrarse.</p>`,
      position: 'bottom',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.router.navigate(['login'])
          }
        }
      ]
    }).then(toast => {
      toast.present();
    })
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

    toast.onDidDismiss = () => {
      this.router.navigate(['service-categories']);
    };

    toast.then((_toast: any) => {
      _toast.present();
    });
  }

  private async presentLoading() {

    this.loading = await this.loadingController.create({
      message: `<p>Un momento por favor...</p>`,
      backdropDismiss: false
    });

    await this.loading.present();
  }
}
