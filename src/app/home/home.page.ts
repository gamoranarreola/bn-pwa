import { Component, OnInit } from '@angular/core';
import { ItemDescComponent } from '../core/components/modals/item-desc/item-desc.component';
import { ModalController } from '@ionic/angular';
import { IonRouterOutlet } from '@ionic/angular';

import { environment as env } from '../../environments/environment';
import { ApiDataService } from '../core/services/api-data.service';
import { ServiceCategory } from '../feature/service/models/service-category.class';
import { NavController } from '@ionic/angular';

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
  enabledServices = [6,7,8,10,11,13,15,18,19];
  showBtn = false;
  deferredPrompt;
  constructor(
    public modalController: ModalController,
    private routerOutlet: IonRouterOutlet,
    private apiDataService: ApiDataService,
    public navCtrl: NavController
  ) { }

  async presentModal(data, img) {
    data.image = img;
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
      console.log(response);
      this.serviceCategories = response.data.map((serviceCategory: ServiceCategory) => new ServiceCategory(serviceCategory));
    },(err) => {      
      console.error(err)});
  }





}
