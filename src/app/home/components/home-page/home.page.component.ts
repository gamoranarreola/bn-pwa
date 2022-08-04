import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonRouterOutlet } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';

import { environment as env } from 'src/environments/environment';
import { ItemDescComponent } from 'src/app/core/components/modals/item-desc/item-desc.component';
import { ApiDataService } from 'src/app/core/services/api-data.service';
import { ServiceCategory } from 'src/app/feature/service/models/service-category.class';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.component.html',
  styleUrls: ['home.page.component.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy {

  @ViewChild('selectList') selectList: ElementRef;
  @ViewChildren('services') services: QueryList<ElementRef>;

  slideOpts = {
    initialSlide: 1,
    speed: 400,
  };

  loadingFlag = true;
  serviceCategories: ServiceCategory[] = [];
  servbtnPane = true;
  showBtn = false;
  deferredPrompt;

  private readonly subscriptions = new Subscription();

  constructor(
    public modalController: ModalController,
    private routerOutlet: IonRouterOutlet,
    private apiDataService: ApiDataService,
    public navCtrl: NavController
  ) {}

  async presentModal(data, img) {
    data.image = img;
    const modal = await this.modalController.create({
      component: ItemDescComponent,
      componentProps: { service: data },
      cssClass: 'my-custom-class',
      swipeToClose: true,
      mode: 'ios',
      backdropDismiss: true,
      presentingElement: this.routerOutlet.nativeEl,
    });
    return await modal.present();
  }

  servicesPanel(service) {
    if (service.category === 5) {
      if (service.id === 16 || service.id === 13 || service.id === 14) {
        return true;
      }
      return false;
    }
    return true;
  }

  showServices() {
    this.services.forEach((item) => {
      if (item.nativeElement.classList.contains('serv_5')) {
        item.nativeElement.style.display = 'block';
        this.servbtnPane = false;
        return;
      }
    });
  }

  ngOnInit(): void {

    this.subscriptions.add(
      this.apiDataService
        .getData(env.routes.services.getServiceCategories, false, 'get')
        .subscribe(
          (response) => {         
            this.serviceCategories = response.data.map(
              (serviceCategory: ServiceCategory) =>
                new ServiceCategory(serviceCategory)
            );
            this.loadingFlag = false;
          },
          (err) => {
            console.error(err);
          }
        )
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
