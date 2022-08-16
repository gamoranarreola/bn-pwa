import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Region } from '../../models/region.interface';

import { RegionService } from '../../services/region.service';


@Component({
  selector: 'app-region-selection',
  templateUrl: './region-selection.component.html',
  styleUrls: ['./region-selection.component.scss'],
})
export class RegionSelectionComponent implements OnInit, OnDestroy {

  regions: Region[];

  private readonly subscriptions = new Subscription();

  constructor(private regionService: RegionService) { }

  ngOnInit(): void {

    this.subscriptions.add(
      this.regionService.getRegions().subscribe({
        next: regions => {
          this.regions = regions;
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
