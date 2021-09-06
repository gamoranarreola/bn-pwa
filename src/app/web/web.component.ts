import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss'],
})
export class WebComponent implements OnInit {
  nombre = 'test';


  categorias = [ 
    // MAQUILLAGE
    {name:'Maquillaje',img: './assets/images/web/inicio-3.jpeg', panel:false, 
      // 1
      servicios:[{name:'Maquillaje Social Noche o Dia', 
      price:950, 
      time: '60 min ',
      desc: 'Tan Natural o dramatico como lo desees, haremos que te veas espectacular.',
      img: './assets/images/web/inicio-2.png'},
    ]},
    // PEINADO
    {name: 'Peinado',img: './assets/images/web/inicio-4.jpeg', panel:false, 
      // 2
      servicios: [{name:'PEINADO BASICO',
       price:430,
       time:'40 min',
       desc:'Desde un alaciado hasta unas ondas relajadas, tu cabello sera perfecto. ( Este servicio no incluye aplicación de extensiones o secado de cabello)', 
       img: './assets/images/web/inicio-2.png'},
      // 3
       {name:'PEINADO  ELABORADO ',
       price:620,
       time:'60 min',
       desc:'Pulido o relajado tu recogido o semi-recogido a tu gusto y personalidad  (Este servicio no incluye aplicación de extensiones o secado de cabello)',
       img: './assets/images/web/inicio-2.png'},
       // 4
       {name:'ALTO PEINADO',
       price:830,
       time:'90 min',
       desc:'Un Peinado con alto grado de dificultd, como Ondas Vintage, recogidos completos con altura, etc   (Este servicio no incluye aplicación de extensiones o secado de cabello)',
       img: './assets/images/web/inicio-2.png'}
    ]},
    // MAQUILLAGE Y PEINADO
    {name: 'Maquillaje y Peinado' ,img: './assets/images/web/inicio-5.jpeg',panel:false,
    // 5
    servicios: [{name:'Maquillaje SOCIAL y peinado BASICO ', 
    price:1250, 
    time: '1:40 hrs ',
    desc: 'El maquillaje a tu gusto, con un peinado ligero y sencillo (ondas relajadas o alaciado)  Este servicio no incluye aplicación de extensiones o secado de cabello',
    img: './assets/images/web/inicio-2.png'},
    // 6
    {name:'Maquillaje SOCIALy Peinado ELABORADO ',
    price:1470,
    time: '2:00 hrs ',
    desc:'Maquillaje a tu gusto con tu cabello en semi-recogido o recogido completo sencillo)  Este servicio no incluye aplicación de extensiones o secado de cabello',
    img: './assets/images/web/inicio-2.png'},
    // 7
    {name:'Maquillaje Social y ALTO PEINADO ',
    price:1620,
    time: '2;30 hrs ',
    desc:'Maquillaje a tu gusto, y tu cabello en Ondas Vintage o recogidos con alta complejidad, asi como peinados ELABORADOS de cabello con microchip o tejidas o cabello mas largo de media espalda o abundante)',
    img: './assets/images/web/inicio-2.png'},
    // 8
    {name:'Maquillaje y Peinadol Niñas, FESTIVAL ',
    
    time: '1:30 hrs ',
    desc:'Adaptado al tema que necesites y seguimos los lineamientos del diseño de tu caracterizacion.',
    img: './assets/images/web/inicio-2.png'},
    
  ]},
    // XV AñOS
    {name: 'XV Años', img: './assets/images/web/inicio-6.jpeg', panel:false,
    // 9 
    servicios: [{name:'Maquillaje y peinado ', 
    price:1850, 
    time: '2:20 min ',
    desc: 'El maquillaje y Peinado perfecto para una jovencita, tan natural o cargado como lo decidas.',
    img: './assets/images/web/inicio-2.png'}, 
    // 10
    {name:'Maquillaje ',
     price:1100,
     time: '1:00 hrs ',
     desc:'Tu transformacion de niña a mujer en un maquillaje ligero y juvenil.',
     img: './assets/images/web/inicio-2.png'},
    // 11
     {name:'Peinado ',
     price:850,
     time: '1:00 hrs ',
     desc:'Fijams tu peinado para que puedas bailar agusto toda la nohce.',
     img: './assets/images/web/inicio-2.png'},
    // 12
     {name:'Prueba de Maquillaje y Peinado ',
     price:1470,
     time: '2;30 hrs ',
     desc:'Una prueba siempre te dara la seguridad de cómo sera tu look ese dia, ademas te la da oportunidad de hacer ligeros cambios.',
     img: './assets/images/web/inicio-2.png'}]
    },
  //  NOVIAS
    {name: 'Novias', img: './assets/images/web/inicio-7.jpeg', panel:false,
    // 13 
    servicios: [{name:'Prueba Maquillaje y Peinado ', 
      price:2200, 
      time: '3:00 hrs ',
      desc: 'Trabajaremos contigo para crear el look perfecto , desde algo muy natural hasta algo mas cargado o dramatico, dependiendo de lo que se ajuste a tu personalidad y gusto.',
      img: './assets/images/web/inicio-2.png'},
      // 14
     {name:'Prueba Maquillaje ',
     price:1500,
     time: '2:00 hrs ',
     desc:'En una consulta con tu Beautier especialista en Novias revisaras el detalle de cómo deseas lucir,  seguido de un paso a paso del proceso, donde te daremos retroalimientacion y sugierencias para un mejor look.',
     img: './assets/images/web/inicio-2.png'},
     // 15
     {name:'Prueba peinado',
     price:1100,
     time: '2:00 hrs ',
     desc:'En una consulta con tu Beautier especialista en Novias revisaras el detalle de cómo deseas lucir,  seguido de un paso a paso del proceso, donde te daremos retroalimientacion y sugierencias para un mejor look.',
     img: './assets/images/web/inicio-2.png'},
     // 16
     {name:'Maquillaje y Peinado ',
     price:2850,
     time: '3:00 min ',
     desc:'Las Beautiers especialistas en novias se encargan de que ese dia luzcas fresca, radiante y perfecta en tu dia. Las Beautiers especialistas en novias.',
     img: './assets/images/web/inicio-2.png'},
     // 17
     {name:'Maquillaje  ',
     price:1720,
     time: '2:00 hrs ',
     desc:'Tu maquillaje sera fresco, lucieras espectacular e irradiaras esa Felicidad y ilusion que llevas dentro.',
     img: './assets/images/web/inicio-2.png'},
     // 18
     {name:'Peinado',
     price:1270,
     time: '1:30 hrs',
     desc:'Tu peinado sera tan pulido o tan relajado como lo desees, te ayudamos aplicando tu tocado y/o velo.',
     img: './assets/images/web/inicio-2.png'}
    ]},
   
  ];
   
 
  iconos=[{img:'./assets/images/web/inicio-car.png', titulo:'HASTA DONDE ESTES', descrip:'Vamos hasta donde estes, selecciona tu servicio, horario y fecha de tu cita' },
          {img:'./assets/images/web/inicio-clock.png', titulo:'FACIL', descrip:'Sin largas esperas y tediosos traslados, Agenda hasta con 4hrs de Anticipación' },
          {img:'./assets/images/web/inicio-card.png', titulo:'PAGO EN LÍNEA', descrip:'Fácil y Seguro de usar. Altos estándares de seguridad' }]
 
          iconos2=[{img:'./assets/images/web/inicio-car.png', titulo:'HASTA DONDE ESTES', descrip:'Vamos hasta donde estes, selecciona tu servicio, horario y fecha de tu cita' },
          {img:'./assets/images/web/inicio-clock.png', titulo:'FACIL', descrip:'Sin largas esperas y tediosos traslados, Agenda hasta con 4hrs de Anticipación' },
          {img:'./assets/images/web/inicio-card.png', titulo:'PAGO EN LÍNEA', descrip:'Fácil y Seguro de usar. Altos estándares de seguridad' },
          {img:'./assets/images/web/inicio-wamen.png', titulo:'BEAUTIERS', descrip:'Nuestras Beautiers son profesionales de la belleza con amplia experiencia' }]
// Falta editar la imagen de la #1m >>>>
// { img:'./assets/images/web/beautier-1.jpeg', esp:'Maquillista y Alto Peinado',nombre:'YZDETH LLAMAS'},

          BEAWTIERS=[
                     { img:'./assets/images/web/beautier-2.png', esp:'Maquillista y Peinado Básico',nombre:'VIANA HERNANDEZ'},
                     { img:'./assets/images/web/beautier-3.png', esp:'Maquillista y Peinado Básico',nombre:'STEPHANI ESPARZA'},
                     { img:'./assets/images/web/beautier-4.png', esp:'Maquillista y Peinado Básico',nombre:'KAREN FLORES'},
                     { img:'./assets/images/web/beautier-5.png', esp:'Maquillaje y Peinado Básico',nombre:'CINTHYA RODRIGUEZ'},
                     { img:'./assets/images/web/beutyers-6.png', esp:'Maquillista y Peinado Básico',nombre:'DANNY V. MICHEL'},
                     { img:'./assets/images/web/beutyers-7.png', esp:'Maquillista y Peinado Básico',nombre:'MICHEL INGELMO'},
                     { img:'./assets/images/web/beautier-8.png', esp:'Maquillista y Alto Peinado',nombre:'KARLA MARTÍNEZ'},
                     { img:'./assets/images/web/beutyers-9.png', esp:'Maquillista y Peinado Básico',nombre:'IVONNE AYALA'}
        
        ];

  
  constructor() { 
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      // true for mobile device
      window.location.href = "home";
    }
   
  }

  ngOnInit() {}

}
