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

import { ItemDescriptionComponent } from 'src/app/core/components/modals/item-description/item-description.component';
import { ServiceCategory } from 'src/app/core/models/service-category.class';
import { RegionService } from 'src/app/core/services/region.service';
import { ServiceCategoriesService } from 'src/app/core/services/service-categories.service';


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
  currentRegionDisplayName: string;
  serviceCategories: ServiceCategory[] = [];

  private readonly subscriptions = new Subscription();

  constructor(
    public modalController: ModalController,
    private routerOutlet: IonRouterOutlet,
    private regionService: RegionService,
    private serviceCategoriesService: ServiceCategoriesService,
    public navCtrl: NavController
  ) {}

  async presentItemDescriptionModal(data: any, img: any) {
    data.image = img;

    const modal = await this.modalController.create({
      component: ItemDescriptionComponent,
      componentProps: { service: data },
      canDismiss: true,
      mode: 'ios',
      backdropDismiss: true,
      presentingElement: this.routerOutlet.nativeEl,
    });

    return await modal.present();
  }

  ngOnInit(): void {

    this.subscriptions.add(
      this.regionService.getCurrentRegion().subscribe({
        next: region => {
          if (region) {
            this.currentRegionDisplayName = this.regionService.getRegionDisplayName();
            this.serviceCategoriesService.loadServiceCategories();
          }
        }
      })
    );

    this.subscriptions.add(
      this.serviceCategoriesService.getServiceCategories().subscribe({
        next: (serviceCategories: ServiceCategory[]) => {
          this.serviceCategories = serviceCategories;
          this.loadingFlag = false;
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
