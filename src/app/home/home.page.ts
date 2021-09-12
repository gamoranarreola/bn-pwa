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


  categorias = [ 
    // MAQUILLAGE
    {
      name:'Maquillaje', img: './assets/images/web/inicio-1.png', panel:false,
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
      description: 'Tan Natural o dramatico como lo desees, haremos que te veas espectacular.',
      img: './assets/images/web/inicio-2.png'
    }
    ]},
    // PEINADO


    {
      name:'Peinado',  img: './assets/images/web/inicio-2.png', panel:false,
      items:[
      {
      id: 123,
      service_id:'12BC',
      category: {id: 1, name:'PEINADO BASICO'},
      name:'Maquillaje Social Noche o Dia',       
      public_price:430, 
      duration: '40 min ',
      includes_eyelashes: '',
      specialties: {id: 1, name:'maquillaje test'},
      availability: true,
      description: 'Desde un alaciado hasta unas ondas relajadas, tu cabello sera perfecto. ( Este servicio no incluye aplicación de extensiones o secado de cabello)',
      img: './assets/images/web/inicio-2.png'}, 
       // 3
      {
        id: 123,
        service_id:'12BC',
        name:'PEINADO  ELABORADO ',
        category: {id: 1, name:'PEINADO BASICO'},
        public_price:620,
        includes_eyelashes: '',
        availability: true,
        specialties: {id: 1, name:'maquillaje test'},
        duration:'60 min',
        description:'Pulido o relajado tu recogido o semi-recogido a tu gusto y personalidad  (Este servicio no incluye aplicación de extensiones o secado de cabello)',
        img: './assets/images/web/inicio-2.png'
      },
       // 4
       {
        id: 123,
        service_id:'12BC',
        name:'ALTO PEINADO',
        includes_eyelashes: '',
        category: {id: 1, name:'PEINADO BASICO'},
        public_price:830,
        availability: true,
        specialties: {id: 1, name:'maquillaje test'},
        duration:'90 min',
        description:'Un Peinado con alto grado de dificultd, como Ondas Vintage, recogidos completos con altura, etc   (Este servicio no incluye aplicación de extensiones o secado de cabello)',
        img: './assets/images/web/inicio-2.png'
      }
      

    ]},
    




    // MAQUILLAGE Y PEINADO
  //   {name: 'Maquillaje y Peinado' ,img: './assets/images/web/inicio-1.png',panel:false,
  //   // 5
  //   servicios: [{name:'Maquillaje SOCIAL y peinado BASICO ', 
  //   public_price:1250, 
  //   duration: '1:40 hrs ',
  //   desc: 'El maquillaje a tu gusto, con un peinado ligero y sencillo (ondas relajadas o alaciado)  Este servicio no incluye aplicación de extensiones o secado de cabello',
  //   img: './assets/images/web/inicio-2.png'},
  //   // 6
  //   {name:'Maquillaje SOCIALy Peinado ELABORADO ',
  //   public_price:1470,
  //   duration: '2:00 hrs ',
  //   desc:'Maquillaje a tu gusto con tu cabello en semi-recogido o recogido completo sencillo)  Este servicio no incluye aplicación de extensiones o secado de cabello',
  //   img: './assets/images/web/inicio-2.png'},
  //   // 7
  //   {name:'Maquillaje Social y ALTO PEINADO ',
  //   public_price:1620,
  //   duration: '2;30 hrs ',
  //   desc:'Maquillaje a tu gusto, y tu cabello en Ondas Vintage o recogidos con alta complejidad, asi como peinados ELABORADOS de cabello con microchip o tejidas o cabello mas largo de media espalda o abundante)',
  //   img: './assets/images/web/inicio-2.png'},
  //   // 8
  //   {name:'Maquillaje y Peinadol Niñas, FESTIVAL ',
    
  //   duration: '1:30 hrs ',
  //   desc:'Adaptado al tema que necesites y seguimos los lineamientos del diseño de tu caracterizacion.',
  //   img: './assets/images/web/inicio-2.png'},
    
  // ]},
    // XV AñOS
  //   {name: 'XV Años', img: './assets/images/web/inicio-1.png', panel:false,
  //   // 9 
  //   servicios: [{name:'Maquillaje y peinado ', 
  //   public_price:1850, 
  //   duration: '2:20 min ',
  //   desc: 'El maquillaje y Peinado perfecto para una jovencita, tan natural o cargado como lo decidas.',
  //   img: './assets/images/web/inicio-2.png'}, 
  //   // 10
  //   {name:'Maquillaje ',
  //    public_price:1100,
  //    duration: '1:00 hrs ',
  //    desc:'Tu transformacion de niña a mujer en un maquillaje ligero y juvenil.',
  //    img: './assets/images/web/inicio-2.png'},
  //   // 11
  //    {name:'Peinado ',
  //    public_price:850,
  //    duration: '1:00 hrs ',
  //    desc:'Fijams tu peinado para que puedas bailar agusto toda la nohce.',
  //    img: './assets/images/web/inicio-2.png'},
  //   // 12
  //    {name:'Prueba de Maquillaje y Peinado ',
  //    public_price:1470,
  //    duration: '2;30 hrs ',
  //    desc:'Una prueba siempre te dara la seguridad de cómo sera tu look ese dia, ademas te la da oportunidad de hacer ligeros cambios.',
  //    img: './assets/images/web/inicio-2.png'}]
  //   },
  // //  NOVIAS
  //   {name: 'Novias', img: './assets/images/web/inicio-1.png', panel:false,
  //   // 13 
  //   servicios: [{name:'Prueba Maquillaje y Peinado ', 
  //     public_price:2200, 
  //     duration: '3:00 hrs ',
  //     desc: 'Trabajaremos contigo para crear el look perfecto , desde algo muy natural hasta algo mas cargado o dramatico, dependiendo de lo que se ajuste a tu personalidad y gusto.',
  //     img: './assets/images/web/inicio-2.png'},
  //     // 14
  //    {name:'Prueba Maquillaje ',
  //    public_price:1500,
  //    duration: '2:00 hrs ',
  //    desc:'En una consulta con tu Beautier especialista en Novias revisaras el detalle de cómo deseas lucir,  seguido de un paso a paso del proceso, donde te daremos retroalimientacion y sugierencias para un mejor look.',
  //    img: './assets/images/web/inicio-2.png'},
  //    // 15
  //    {name:'Prueba peinado',
  //    public_price:1100,
  //    duration: '2:00 hrs ',
  //    desc:'En una consulta con tu Beautier especialista en Novias revisaras el detalle de cómo deseas lucir,  seguido de un paso a paso del proceso, donde te daremos retroalimientacion y sugierencias para un mejor look.',
  //    img: './assets/images/web/inicio-2.png'},
  //    // 16
  //    {name:'Maquillaje y Peinado ',
  //    public_price:2850,
  //    duration: '3:00 min ',
  //    desc:'Las Beautiers especialistas en novias se encargan de que ese dia luzcas fresca, radiante y perfecta en tu dia. Las Beautiers especialistas en novias.',
  //    img: './assets/images/web/inicio-2.png'},
  //    // 17
  //    {name:'Maquillaje  ',
  //    public_price:1720,
  //    duration: '2:00 hrs ',
  //    desc:'Tu maquillaje sera fresco, lucieras espectacular e irradiaras esa Felicidad y ilusion que llevas dentro.',
  //    img: './assets/images/web/inicio-2.png'},
  //    // 18
  //    {name:'Peinado',
  //    public_price:1270,
  //    duration: '1:30 hrs',
  //    desc:'Tu peinado sera tan pulido o tan relajado como lo desees, te ayudamos aplicando tu tocado y/o velo.',
  //    img: './assets/images/web/inicio-2.png'}
  //   ]},
   
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
