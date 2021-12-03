import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {ImageModalPage} from './image-modal/image-modal.page';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  images = [ 2, 3 ,4];

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
this.modalController.create({
  component: ImageModalPage,
  componentProps: {
    img: img
  }
}).then(modal => modal.present());
  }

  
}
