import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {ImageModalPage} from './../../gallery/image-modal/image-modal.page';
@Component({
  selector: 'app-beautier-modal',
  templateUrl: './beautier-modal.component.html',
  styleUrls: ['./beautier-modal.component.scss'],
})
export class BeautierModalComponent implements OnInit {
  inputValidators: any;
  @Input() service: any;
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    zoom: false,
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 20,
  };
  constructor(private modalController: ModalController,) { 

  }

  ngOnInit() {}

   /**
   *
   */
    closeModal() {
      this.modalController.dismiss();
    }

    openPreview(img) {
      this.modalController.create({
        component: ImageModalPage,
        componentProps: {
          img: img
        }
      }).then(modal => modal.present());
  }
  
}
