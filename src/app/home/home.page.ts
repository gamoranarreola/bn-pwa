import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ItemDescComponent } from '../core/components/modals/item-desc/item-desc.component';
import { ModalController } from '@ionic/angular';
import { IonRouterOutlet } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
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
  @ViewChild('selectList') selectList: ElementRef;
  @ViewChildren("services") services: QueryList<ElementRef>
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  serviceCategories: ServiceCategory[] = [
  {id: 3, name: "Maquillaje y Peinado - Social", panel: false, services: [] },
  {id: 4, name: "XV Años", panel: false, services: [] },
  {id: 5, name: "Novias y Acompañantes", panel: false, services: [] }
  ];
  servbtnPane = true;
  enabledCategories = [3,4,5];
  enabledServices = [6,7,8,10,11,13,15,18,19];
  showBtn = false;
  deferredPrompt;
  constructor(
    public modalController: ModalController,
    private routerOutlet: IonRouterOutlet,
    private apiDataService: ApiDataService,
    public navCtrl: NavController,
    public loadingController: LoadingControlle
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
  servicesPanel(service) {
    
    if (service.category === 5) {
      
      if (service.id === 16 || service.id === 13 || service.id === 14) {return true; }
    
      return false;
    } 
    return true;
  }

  showServices() {
    this.services.forEach((item) => {
    
      if (item.nativeElement.classList.contains('serv_5')) {
        item.nativeElement.style.display='block';
        this.servbtnPane = false;
        return;
      } 
    } );
  }

  
  ngOnInit() {
    handleButtonClick();
    this.apiDataService.getData(env.routes.services.getServiceCategories, false, 'get').subscribe(response => {
    
      this.serviceCategories = response.data.map((serviceCategory: ServiceCategory) => new ServiceCategory(serviceCategory));
      
    },(err) => {      
      console.error(err)});
  }


  // async function handleButtonClick() {
  //   const loading = await loadingController.create({
  //     message: 'Please wait...',
  //     duration: 3000,
  //   });

  //   await loading.present();
  // }


}
