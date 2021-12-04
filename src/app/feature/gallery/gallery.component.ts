import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {ImageModalPage} from './image-modal/image-modal.page';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  images = [ 1, 2 ,3,4,5,6,7,8,9,10];
  images2 = [ 11, 12 ,13,14,15,16,17,18,19,20];
  images3 = [ 21, 22 ,23,24,25,26,27,28,29,30];
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    zoom: false,
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 20,
  };
 
  constructor(private modalController: ModalController) { }

  ngOnInit() {}
  openPreview(img) {
    img = `./../../../assets/images/gallery/g${img}.jpeg`;
      this.modalController.create({
        component: ImageModalPage,
        componentProps: {
          img: img
        }
      }).then(modal => modal.present());
  }

  
}
