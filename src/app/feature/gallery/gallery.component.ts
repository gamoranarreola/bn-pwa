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
  images = [];
  images2 = [];
  images3 = [];
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

    this.setImages(1,1)
    this.setImages(10,1)
    this.setImages(11,1)
   

    this.setImages(12,2)
    this.setImages(13,2)
    this.setImages(14,2)

    this.setImages(15,3)
    this.setImages(17,3)
    this.setImages(7,3)
    this.setImages(8,3)
  }

  setImages(number, gallery) {
    this.apiDataService.getData(`${env.routes.beautiers.getBeautiers}/${number}/work`, false, 'get').subscribe((res: any)=>{   
      if (gallery === 1) {
        if (this.images.length === 0) { 
          this.images = res.data}
       else {
        this.images.concat(res.data)
       }
      } else if (gallery === 2) {
        if (this.images2.length === 0) { 
          this.images2 = res.data}
        else {
         this.images2.concat(res.data)
        }
      }else if (gallery === 3) {
        if (this.images3.length === 0) { 
          this.images3 = res.data}
       else {
        this.images3.concat(res.data)
       }
      }
    });
  }
  openPreview(img) {
   // img = `./../../../assets/images/gallery/g${img}.jpeg`;
      this.modalController.create({
        component: ImageModalPage,
        componentProps: {
          img: img
        }
      }).then(modal => modal.present());
  }

  
}
