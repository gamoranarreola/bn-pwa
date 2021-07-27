import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {FormComponent} from './form/form.component';
@Component({
  selector: 'app-weddings',
  templateUrl: './weddings.component.html',
  styleUrls: ['./weddings.component.scss'],
})
export class WeddingsComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  async openModal(){
    const modal = await this.modalController.create({
      component: FormComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();

 }

}
