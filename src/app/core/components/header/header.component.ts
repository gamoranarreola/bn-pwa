import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Subscription } from 'rxjs';

import { Region } from '../../models/region.interface';
import { RegionService } from '../../services/region.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {

  regions: Region[];

  private readonly subscriptions = new Subscription();

  constructor(
    public actionSheetController: ActionSheetController,
    private regionService: RegionService
  ) { }

  ngOnInit(): void {

    this.subscriptions.add(
      this.regionService.getRegions().subscribe({
        next: regions => {
          this.regions = regions;
        }
      })
    );

    this.subscriptions.add(
      this.regionService.getCurrentRegion().subscribe({
        next: currentRegion => {
          if (!currentRegion) {
            this.presentRegionSelection();
          }
        }
      })
    );
  }

  async presentRegionSelection() {

    const buttons = [];

    this.regions.forEach((r: Region) => {
      buttons.push({
        text: r.display_name,
        handler: () => {
          this.regionService.setCurrentRegion(`${r.code}-${r.state_province_code}-${r.country_code}`);
        }
      });
    });

    const modal = await this.actionSheetController.create({
      header: 'Selecciona tu Región',
      buttons
    });

    return await modal.present();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
