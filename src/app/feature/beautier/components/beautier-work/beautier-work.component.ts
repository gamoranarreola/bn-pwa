import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ApiDataService } from 'src/app/core/services/api-data.service';

import { environment as env } from 'src/environments/environment';
import { ImageModalPage } from 'src/app/feature/gallery/image-modal/image-modal.page';
import { Beautier } from '../../models/beautier.interface';


@Component({
  selector: 'app-beautier-work',
  templateUrl: './beautier-work.component.html',
  styleUrls: ['./beautier-work.component.scss'],
})
export class BeautierWorkComponent implements OnInit, OnDestroy {

  @Input() beautier: Beautier;
  img_urls: string[];

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    zoom: false,
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 20,
  };

  private readonly subscriptions = new Subscription();

  constructor(
    private modalController: ModalController,
    private apiDataService: ApiDataService
  ) { }

  openPreview(img: any) {
    this.modalController
      .create({
        component: ImageModalPage,
        componentProps: {
          img,
        },
      })
      .then((modal) => modal.present());
  }

  ngOnInit(): void {

    this.subscriptions.add(
      this.apiDataService.getData(`${env.routes.beautiers.getBeautiers}/${this.beautier.id}/work`, false, 'get').subscribe(
        (res: any) => {
          this.img_urls = res.data as string[];
        }
      )
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
