import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { Beautier } from '../../models/beautier.interface';


@Component({
  selector: 'app-beautier-modal',
  templateUrl: './beautier-modal.component.html',
  styleUrls: ['./beautier-modal.component.scss'],
})
export class BeautierModalComponent {

  @Input() beautier: Beautier;
  inputValidators: any;

  constructor(private modalController: ModalController) {}

  /**
   *
   */
  closeModal() {
    this.modalController.dismiss();
  }

}
