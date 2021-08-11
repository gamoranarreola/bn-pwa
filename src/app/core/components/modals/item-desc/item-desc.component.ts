import { Component, Input } from '@angular/core';
import { IonInput, ModalController } from '@ionic/angular';
@Component({
  selector: 'app-item-desc',
  templateUrl: './item-desc.component.html',
  styleUrls: ['./item-desc.component.scss'],
})
export class ItemDescComponent  {
@Input() name: string;
@Input() price: number;
@Input() desc: string;
@Input() time: string;
nomPersonas = 0;
  constructor(private mtrl: ModalController) { }

  cerrarModal() {
    this.mtrl.dismiss();
  }

  addPerson() {
    this.nomPersonas++;
  }
  removePerson() {
    let result = this.nomPersonas -1;
    
    if(result < 0) { result = 0;}  ;
    this.nomPersonas = result;
  }
}
