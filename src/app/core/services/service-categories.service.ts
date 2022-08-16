import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, switchMap } from 'rxjs';

import { environment as env } from 'src/environments/environment';
import { ServiceCategory } from '../models/service-category.class';
import { ApiDataService } from './api-data.service';
import { RegionService } from './region.service';


@Injectable({
  providedIn: 'root'
})
export class ServiceCategoriesService {

  private _serviceCategories = new BehaviorSubject<ServiceCategory[]>(undefined);
  private serviceCategories$ = this._serviceCategories.asObservable();

  constructor(
    private apiDataService: ApiDataService,
    private regionService: RegionService
  ) { }

  getServiceCategories(): Observable<ServiceCategory[]> {
    return this.serviceCategories$;
  }

  setServiceCategories(value: ServiceCategory[]): void {
    this._serviceCategories.next(value);
  }

  loadServiceCategories(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.regionService.getCurrentRegion().pipe(
        // eslint-disable-next-line max-len
        switchMap(currentRegion => this.apiDataService.getData(`${env.routes.services.getServiceCategories}?region=${currentRegion}`, false, 'get')
      )).subscribe(res => {
        this.setServiceCategories(res.data);
        resolve(true);
      });
    });
  }
}
