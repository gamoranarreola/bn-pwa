import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {ImageModalPage} from './image-modal/image-modal.page';
import { ApiDataService } from 'src/app/core/services/api-data.service';
import { environment as env } from 'src/environments/environment';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {

  // Stephanie Osuna
  images_18 = [];
  // Viana Hernandez
  images_15 = [];
  // Stephani Esperanza
  images_13 = [];
  // Danny Michel
  images_12 = [];
  // Michel Ingelmo
  images_11 = [];
  // Frida Contreras
  images_10 = [];
  // Dulce Alejo
  images_8 = [];
  // Naty Ambrocio
  images_7 = [];
  // andromeda
  images_1 = [];
  // ALMA TLAZOLA
  images_24 =[];
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    zoom: false,
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 20,
  };
 
  constructor(private modalController: ModalController,
    private apiDataService: ApiDataService) { }

  ngOnInit() {   

    this.setImages(12)
    this.setImages(11)
    this.setImages(24)
    setTimeout(() =>{
      this.setImages(10)
      this.setImages(18)
      this.setImages(15)
    },1000)
   setTimeout(() =>{
    this.setImages(13)
    this.setImages(8)
    this.setImages(7)
    this.setImages(1)      
   },2000)
    
  }

  setImages(number:number) {
    this.apiDataService.getData(`${env.routes.beautiers.getBeautiers}/${number}/work`, false, 'get').subscribe((res: any)=>{   
      
      const gallery = number;
      // console.log('Gallery #:'+ gallery);
      // console.log(res.data);

      if (gallery === 1) {       
          this.images_1 = res.data    
          this.images_1 = this.shuffle(this.images_1);
      } else if (gallery === 18) {  
        this.images_18 = res.data;
        this.images_18.shift();
        this.images_18 = this.shuffle(this.images_18);
      }else if (gallery === 15) {
        this.images_15 = res.data
        this.images_15 = this.shuffle(this.images_15);
      }else if (gallery === 13) {
          this.images_13 = res.data;
          this.images_13.shift();
          this.images_13 = this.shuffle(this.images_13);
      }else if (gallery === 12) {
        this.images_12 = res.data
        this.images_12 = this.shuffle(this.images_12);
      }else if (gallery === 11) {
        this.images_11 = res.data
        this.images_11 = this.shuffle(this.images_11);
      }else if (gallery === 10) {
        this.images_10 = res.data
        this.images_10 = this.shuffle(this.images_10);
      }else if (gallery === 8) {
        this.images_8 = res.data
        this.images_8 = this.shuffle(this.images_8);
      }else if (gallery === 7) {
        this.images_7 = res.data
        this.images_7 = this.shuffle(this.images_7);
      }else if (gallery === 24) {
        this.images_24 = res.data
        this.images_24.shift();
        this.images_24 = this.shuffle(this.images_24);
      }
    });
  }

  shuffle(array: any): []{
    return array.sort(function () {
      return Math.random() - 0.5;
    });   
  }
  openPreview(img: string) {
  console.log('opening image');
  console.log(img);
   // img = `./../../../assets/images/gallery/g${img}.jpeg`;
      this.modalController.create({
        component: ImageModalPage,
        componentProps: {
          img: img
        }
      }).then(modal => modal.present());
  }

  
}
