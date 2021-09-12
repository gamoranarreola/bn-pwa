import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {FormComponent} from './form/form.component';
@Component({
  selector: 'app-weddings',
  templateUrl: './weddings.component.html',
  styleUrls: ['./weddings.component.scss'],
})
export class WeddingsComponent implements OnInit {

  constructor(public modalController: ModalController) {
    if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      // true for mobile device
     // alert("mobile device");
     window.location.href = "web";
    }
   }

  ngOnInit() {}

  async openModal(){
    const modal = await this.modalController.create({
      component: FormComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();

 }

}
