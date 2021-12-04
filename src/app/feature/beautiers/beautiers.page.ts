import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {BeautierModalComponent} from './beautier-modal/beautier-modal.component';
import { IonRouterOutlet } from '@ionic/angular';
@Component({
  selector: 'app-beautiers',
  templateUrl: './beautiers.page.html',
  styleUrls: ['./beautiers.page.scss'],
})
export class BeautiersPage implements OnInit {
  beauters = [
    {name:"YZDETH LLAMAS", job: 'Maquillista y Alto Peinado', img:'beautier-1.jpeg', nota: `Soy maquillista y peinadora profesional desde Diciembre del 2016.  Creo firmemente que el maquillaje es Arte y la belleza siempre nuestra esencia`,
  especilidades: ['Maquillaje Social', 'Especialista en Novias', 'Maquillaje quinceañera', 'Maquillaje de Fantasia', 'Maquillaje Editorial','Maquillaje para fotografia', 'Alto peinado']
  },
  
  {name:"VIANA HERNANDEZ", job: 'Maquillista y Peinado Básico', img:'beautier-2.png', nota: 'Soy maquillista y peinadora profesional, hace dos años que me recibí como profesional. Me apasiona maquillar simplemente por que me gusta que mi clienta se sienta aún más linda de lo que ya es y me conforta ver su sonrisa al verse al espejo. Espero muy pronto poder atenderte',
  especilidades: ['MAQUILLAJE PROFESIONAL', 'PEINADO BÁSICO (ONDAS Y SEMIRECOGIDOS SENCILLOS)'],
  work: ['https://beautynow.mx/wp-content/uploads/2019/10/Viana-Hernandez-6.jpg', 'https://beautynow.mx/wp-content/uploads/2019/10/Viana-Hernandez-1.jpg', 'https://beautynow.mx/wp-content/uploads/2019/10/Viana-Hernandez-2.jpg', 'https://beautynow.mx/wp-content/uploads/2019/10/Viana-Hernandez-3.jpg', 'https://beautynow.mx/wp-content/uploads/2019/10/Viana-Hernandez-4.jpg', 'https://beautynow.mx/wp-content/uploads/2019/10/Viana-Hernandez-5.jpg']
  },

  {name:"STEPHANI ESPARZA", job: 'Maquillista y Peinado Básico', img:'beautier-3.png', nota: 'Hola beauties, soy maquillista tengo un año y medio ejerciendo esta bonita profesión donde he participado en obras de teatro y pasarelas mayormente. Me encanta realizar maquillaje social en mis clientas, looks de día, noche, eventos especiales, para realzar su belleza con los mejores productos. Actualmente me sigo preparando para brindarles un mejor servicio.',
  especilidades: ['MAQUILLAJE SOCIAL', 'PEINADO BÁSICO SOCIAL (ONDAS, Y SEMIRECOGIDOS SENCILLOS)'],
  work: ['https://beautynow.mx/wp-content/uploads/2019/10/b4ae3007-3f54-4289-ba40-e861f0f6f528.jpg', 'https://beautynow.mx/wp-content/uploads/2019/10/b32d0430-e10e-465c-b8f8-ba4ae50d5760.jpg', 'https://beautynow.mx/wp-content/uploads/2019/10/dbae05a2-5aea-42d4-b605-0299a44e670e.jpg', 'https://beautynow.mx/wp-content/uploads/2019/10/SE-1-768x1024.jpeg', 'https://beautynow.mx/wp-content/uploads/2019/10/SE-2-768x1024.jpeg']
  },

  {name:"KAREN FLORES", job: 'Maquillista y Peinado Básico', img:'beautier-4.png', nota: 'Soy maquillista y peinadora profesional desde el 2016. Me especializó en maquillaje y peinado social Disfruto mucho el maquillaje en todos los sentidos y considero que es la mejor forma de expresión. Espero pronto poderte ofrecerte.',
  especilidades: ['MAQUILLAJE SOCIAL', 'PEINADO BÁSICO SOCIAL (ONDAS Y SEMIRECOGIDOS SENCILLOS)'],
  work: ['https://beautynow.mx/wp-content/uploads/2019/10/Karen-Flores-1.jpg', 'https://beautynow.mx/wp-content/uploads/2019/10/Karen-Flores-2.jpg', 'https://beautynow.mx/wp-content/uploads/2019/10/Karen-Flores-3.jpg', 'https://beautynow.mx/wp-content/uploads/2019/10/Karen-Flores-4.jpg', 'https://beautynow.mx/wp-content/uploads/2019/10/KF-8-MAQ.jpeg', 'https://beautynow.mx/wp-content/uploads/2019/10/KF-9-MAQ.jpeg', 'https://beautynow.mx/wp-content/uploads/2019/10/KF-10.-MAQ.jpeg', 'https://beautynow.mx/wp-content/uploads/2019/10/KF-13-MAQ.jpeg', 'https://beautynow.mx/wp-content/uploads/2019/10/KF-15-PEIN.jpeg']
  },

  {name:"CINTHYA RODRIGUEZ", job: 'Maquillaje y Peinado Básico', img:'beautier-5.png', nota: 'Soy Maquillista Profesional con más de 4 años de experiencia, también soy mamá de 2 niñas, esposa y Lic. en Comunicación con especialidad en identidad corporativa, he estudiado maquillaje en Querétaro, Tijuana, y Los Ángeles y he trabajado en pasarelas, teatro, editorial, social y novias. Me gusta viajar en carro, reciclo todo lo que puedo, cuido y respeto la naturaleza y los animales, me gusta compartir tiempo con amigos y familia, soy creativa y me encanta maquillar. Creo firmemente en que siempre, siempre se puede ser mejor, por lo que estoy en constante formación con tendencias y perfeccionando mi técnica para poder brindarte un servicio integral y de calidad.',
  especilidades: ['MAQUILLAJE SOCIAL', 'PEINADO BÁSICO (ONDAS, ALACIADOS, SEMIRECOGIDOS SENCILLOS)', 'TRABAJOS SENCILLOS DE CARACTERIZACIÓN Y FX'],
  work: ['https://beautynow.mx/wp-content/uploads/2019/10/CR-5-730x1024.jpeg', 'https://beautynow.mx/wp-content/uploads/2019/10/CR-6-731x1024.jpeg', 'https://beautynow.mx/wp-content/uploads/2019/10/CR-1-684x1024.jpeg', 'https://beautynow.mx/wp-content/uploads/2019/10/CR-2-731x1024.jpeg', 'https://beautynow.mx/wp-content/uploads/2019/10/CR-3-732x1024.jpeg', 'https://beautynow.mx/wp-content/uploads/2019/10/CR-4-731x1024.jpeg'] },

  {name:"DANNY V. MICHEL", job: 'Maquillista y Peinado Básico', img:'beautier-6.png', nota: 'Desde hace 2 años que empecé a ejercer en el mundo de la belleza como maquillista profesional, me especializo en maquillaje social y sigo en constante preparación tomando talleres para brindarte el mejor servicio, mi mayor pasión se convirtió en mi trabajo y estoy lista para resaltar tu belleza en tus eventos especiales. Espero pronto poder atenderte',
  especilidades: ['MAQUILLAJE SOCIAL', 'PEINADOS BÁSICO (ONDAS, ALACIADOS, SEMIRECOGIDOS SENCILLOS)'],
  work: ['https://beautynow.mx/wp-content/uploads/2019/10/DM-5.jpeg', 'https://beautynow.mx/wp-content/uploads/2019/10/DM-1.jpeg', 'https://beautynow.mx/wp-content/uploads/2019/10/DM-2.jpeg', 'https://beautynow.mx/wp-content/uploads/2019/10/DM-3.jpeg'] },

  {name:"MICHEL INGELMO", job: 'Maquillista y Peinado Básico', img:'beautier-7.png', nota: 'Soy maquillista profesional , con 2 años de experiencia. Me encanta actualizarme en lo mejor. He participado en eventos sociales y pasarelas. Me llena de satisfacción ver a mis clientas con una sonrisa de conformidad, que al verse al espejo se sienta en su mejor versión y lista para asistir a su compromiso social.',
  especilidades: ['MAQUILLAJE PROFESIONAL', 'DISEÑO DE CEJA', 'PEINADO BASICO SENCILLO (ONDAS Y SEMIRECOGIDOS SENCILLOS)'],
  work: ['https://beautynow.mx/wp-content/uploads/2019/10/Michel-Ingelmo-1-920x1024.jpg', 'https://beautynow.mx/wp-content/uploads/2019/10/Michel-Ingelmo-2-768x1024.jpg', 'https://beautynow.mx/wp-content/uploads/2019/10/Michel-Ingelmo-3.jpg', 'https://beautynow.mx/wp-content/uploads/2019/10/Michel-Ingelmo-4.jpg'] },

  {name:"KARLA MARTÍNEZ", job: 'Maquillista y Alto Peinado', img:'beautier-8.png', nota: 'Soy peinadora y maquillista profesional. Trabajo todo tipo de peinando social , recogidos, semi-recogidos, y peinados sencillos también. En el maquillaje, Social es lo que me mas me gusta. Tengo 7 años de experiencia en peinado y un par de años actualizando en maquillaje; me encanta lo que hago. Espero muy pronto seas una de mis clientas satisfechas',
  especilidades: ['ALTO PEINADO', 'PEINADO BÁSICO', 'MAQUILLAJE SOCIAL'],
  work: ['https://beautynow.mx/wp-content/uploads/2019/10/Karla-Martinez-1.jpg', 'https://beautynow.mx/wp-content/uploads/2019/10/Karla-Martinez-2.jpg', 'https://beautynow.mx/wp-content/uploads/2019/10/Karla-Martinez-3.jpg', 'https://beautynow.mx/wp-content/uploads/2019/10/Karla-Martinez-5.jpg', 'https://beautynow.mx/wp-content/uploads/2019/10/Karla-Martinez-4.jpg'] },

  {name:"IVONNE AYALA", job: 'Maquillista y Peinado Básico', img:'beautier-9.png', nota: 'Soy Maquillista profesional desde hace 2 años que formalicé mis estudios, pero trabajando como maquillista llevo 6 años y medio. Estoy certificada en body paints, FX (efectos especiales), caracterización de animales Salvajes, Skin Care Coreano y peinado Básico. He trabajado para: Pasarelas, Cortometrajes, Teatro, Expo EBIO Occidental Guadalajara y Eventos Sociales. Actualmente Estudio la Licenciatura en Artes plásticas. Esto es mi pasión, me encanta ver el rostro de mis clientas sintiéndose mas hermosas al ver el resultado final.',
  especilidades: ['MAQUILLAJE SOCIAL', 'MAQUILLAJE FX', 'MAQUILLAJE DE CARACTERIZACIÓN', 'PEINADO BÁSICO (ONDAS Y SEMIRECOGIDOS SENCILLOS)'],
  work: ['https://beautynow.mx/wp-content/uploads/2019/10/IVA-MAQ-6.jpeg', 'https://beautynow.mx/wp-content/uploads/2019/10/Ivone-1.jpg', 'https://beautynow.mx/wp-content/uploads/2019/10/Ivone-4.jpg', 'https://beautynow.mx/wp-content/uploads/2019/10/Ivone-5.jpg', 'https://beautynow.mx/wp-content/uploads/2019/10/Ivone-6.jpg', 'https://beautynow.mx/wp-content/uploads/2019/10/Ivone-7.jpg', 'https://beautynow.mx/wp-content/uploads/2019/10/Ivone-8.jpg', 'https://beautynow.mx/wp-content/uploads/2019/10/Ivone-3.jpg', 'https://beautynow.mx/wp-content/uploads/2019/10/Ivone-2.jpg', 'https://beautynow.mx/wp-content/uploads/2019/10/IVA-2-MAQ.jpeg', 'https://beautynow.mx/wp-content/uploads/2019/10/IVA-4-MAQ.jpeg'] },
  
  ];
  constructor( public modalController: ModalController,  private routerOutlet: IonRouterOutlet,) { }

  ngOnInit() {
  }
  async presentModal(data) {
   
    const modal = await this.modalController.create({
      component: BeautierModalComponent,
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
