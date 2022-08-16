import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { environment as env } from 'src/environments/environment';
import { Region } from '../models/region.interface';
import { ApiDataService } from './api-data.service';


@Injectable({
  providedIn: 'root'
})
export class RegionService {

  private _currentRegion = new BehaviorSubject<string>(undefined);
  private currentRegion$ = this._currentRegion.asObservable();

  private _regions = new BehaviorSubject<Region[]>(undefined);
  private regions$ = this._regions.asObservable();

  constructor(private apiDataService: ApiDataService) {
    this.setCurrentRegion('TIJ-BC-MEX');
  }

  getCurrentRegion(): Observable<string> {
    return this.currentRegion$;
  }

  setCurrentRegion(value: string): void {
    this._currentRegion.next(value);
  }

  getRegions(): Observable<Region[]> {
    return this.regions$;
  }

  setRegions(value: Region[]): void {
    this._regions.next(value);
  }

  getRegionDisplayName(): string {
    return this._regions.getValue().find((r: Region) => {
      const regionSplit = this.getCurrentRegionSplit();

      return r.code === regionSplit[0] &&
        r.state_province_code === regionSplit[1] &&
        r.country_code === regionSplit[2];
    }).display_name;
  }

  getRegionCountryCode(): string {
    const regionSplit = this.getCurrentRegionSplit();

    return regionSplit[2];
  }

  loadRegions(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.apiDataService.getData(env.routes.services.getRegions, false, 'get').subscribe({
        next: res => {
          this.setRegions(res.data);
          resolve(true);
        },
        error: err => {
          console.error(err);
          reject(false);
        }
      });
    });
  }

  private getCurrentRegionSplit(): string[] {
    return this._currentRegion.getValue().split('-');
  }
}
