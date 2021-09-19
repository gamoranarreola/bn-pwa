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

  panel1 = false;
  panel2 = false;
  panel3 = false;
  panel4 = false;
  panel5 = false;

  serviceCategories: ServiceCategory[] = [];

  constructor(
    public modalController: ModalController,
    private routerOutlet: IonRouterOutlet,
    private apiDataService: ApiDataService
  ) {
    if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      // true for mobile device
     // alert("mobile device");
     window.location.href = 'web';
    }
    //console.log('size:', window.screen.availWidth);
    //if ( window.screen.availWidth > 400 ) {    }
  }

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
      this.serviceCategories = response.data.map(serviceCategory => new ServiceCategory(serviceCategory));
    });
  }
}
