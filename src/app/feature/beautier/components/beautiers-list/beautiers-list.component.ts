/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { IonRouterOutlet } from '@ionic/angular';

import { environment as env } from 'src/environments/environment';
import { ApiDataService } from 'src/app/core/services/api-data.service';
import { Beautier } from '../../models/beautier.interface';
import { BeautierModalComponent } from '../beautier-modal/beautier-modal.component';


@Component({
  selector: 'app-beautiers',
  templateUrl: './beautiers-list.component.html',
  styleUrls: ['./beautiers-list.component.scss'],
})
export class BeautiersListComponent implements OnInit, OnDestroy {

  beautiers!: Beautier[];

  private readonly subscriptions = new Subscription();

  constructor(
    public modalController: ModalController,
    private routerOutlet: IonRouterOutlet,
    private apiDataService: ApiDataService
  ) {}

  /**
   *
   * @param data
   * @returns
   */
  async presentModal(data: any) {

    const modal = await this.modalController.create({
      component: BeautierModalComponent,
      componentProps: { beautier: data },
      cssClass: 'my-custom-class',
      swipeToClose: true,
      mode: 'ios',
      backdropDismiss: true,
      presentingElement: this.routerOutlet.nativeEl,
    });

    return await modal.present();
  }

  ngOnInit(): void {

    this.subscriptions.add(
      this.apiDataService.getData(`${env.routes.beautiers.getBeautiers}`, false, 'get').subscribe(
        (res) => {
          if (res.status === 200) {
            this.beautiers = res.data as Beautier[];
          }
        }
      )
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
