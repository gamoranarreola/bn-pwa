import { Component, OnInit } from '@angular/core';
import { ItemDescComponent } from '../core/components/modals/item-desc/item-desc.component';
import { ModalController } from '@ionic/angular';
import { IonRouterOutlet } from '@ionic/angular';

import { environment as env } from '../../environments/environment';
import { ApiDataService } from '../core/services/api-data.service';
import { ServiceCategory } from '../feature/service/models/service-category.class';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  serviceCategories: ServiceCategory[] = [];
  enabledCategories = [3,4,5];
  enabledServices = [6,10,11,13,15,18,19];

  constructor(
    public modalController: ModalController,
    private routerOutlet: IonRouterOutlet,
    private apiDataService: ApiDataService
  ) { }

  async presentModal(data) {
    const modal = await this.modalController.create({
      component: ItemDescComponent,
      componentProps: {service: data},
      cssClass: 'my-custom-class',
      swipeToClose: true,
      mode: 'ios',
      backdropDismiss: true,
      presentingElement: this.routerOutlet.nativeEl

    });
    return await modal.present();
  }

  ngOnInit() {

    this.apiDataService.getData(env.routes.services.getServiceCategories, false, 'get').subscribe(response => {
      this.serviceCategories = response.data.map((serviceCategory: ServiceCategory) => new ServiceCategory(serviceCategory));
    });
  }
}
