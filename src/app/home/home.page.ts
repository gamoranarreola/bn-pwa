import { Component } from '@angular/core';
import {ItemDescComponent} from '../core/components/modals/item-desc/item-desc.component';
import { ModalController } from '@ionic/angular';
import { IonRouterOutlet } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };


  services = [
    {name:'Maquillaje', 
    items:[
      {
      id: 123,
      service_id:'12BC',
      category: {id: 1, name:'Maquillaje'},
      name:'Maquillaje Social Noche o Dia',       
      public_price:1500, 
      duration: '60 min ',
      includes_eyelashes: '',
      specialties: {id: 1, name:'maquillaje test'},
      availability: true,
      description: 'Tan Natural o dramatico como lo desees, haremos que te veas espectacular.'}
    ], img: './assets/images/web/inicio-1.png'},
    {name: 'Peinado', items: [
      {name:'Peinado Elaborado', price:430,desc:'Desde un alaciado hasta unas ondas relajadas, tu cabello sera perfecto. ( Este servicio no incluye aplicación de extensiones o secado de cabello)'},
      {name:'Peinado Basico', price:430,desc:'Desde un alaciado hasta unas ondas relajadas, tu cabello sera perfecto. ( Este servicio no incluye aplicación de extensiones o secado de cabello)'}
    ]},
    {name: 'Maquillaje y Peinado', items: [], img: 'asdasdasdsadasdasdasdsadasd'},
    {name: 'XV Años', items: []},
    {name: 'Novias', items: []},

  ];



  panel1 = false;
  panel2 = false;
  panel3 = false;
  panel4 = false;
  panel5 = false;
  
  constructor(public modalController: ModalController,private routerOutlet: IonRouterOutlet) {
    if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      // true for mobile device
     // alert("mobile device");
     window.location.href = "web";
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

}
