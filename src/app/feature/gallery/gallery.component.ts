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
  images4 = [];
  images5 = [];
  images6 = [];
  images7 = [];
  images8 = [];
  images9 = [];
  images10 = [];
   images11 = [];
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
    this.setImages(10,2)
    this.setImages(11,3)
   

    this.setImages(12,4)
    this.setImages(13,5)
    this.setImages(14,6)

    this.setImages(15,7)
    this.setImages(17,8)
    this.setImages(7,9)
    this.setImages(8,10)
    this.setImages(14,11)
  }

  setImages(number, gallery) {
    this.apiDataService.getData(`${env.routes.beautiers.getBeautiers}/${number}/work`, false, 'get').subscribe((res: any)=>{   
      if (gallery === 1) {       
          this.images = res.data
       
      } else if (gallery === 2) {
        this.images2 = res.data
        
      }else if (gallery === 3) {        
          this.images3 = res.data       
      }else if (gallery === 4) {        
        this.images4 = res.data       
    }else if (gallery === 5) {        
      this.images5 = res.data       
  }else if (gallery === 6) {        
    this.images6 = res.data       
}else if (gallery === 7) {        
  this.images7 = res.data       
}else if (gallery === 8) {        
  this.images8 = res.data       
}else if (gallery === 9) {        
  this.images9 = res.data       
}else if (gallery === 10) {        
  this.images10 = res.data       
}else if (gallery === 11) {        
  this.images11 = res.data       
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
