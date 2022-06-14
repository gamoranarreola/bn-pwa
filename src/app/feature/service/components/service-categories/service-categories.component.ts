import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ApiDataService } from 'src/app/core/services/api-data.service';
import { ServiceCategory } from '../../models/service-category.class';
import { environment as env } from '../../../../../environments/environment';


@Component({
  selector: 'app-service-categories',
  templateUrl: './service-categories.component.html',
  styleUrls: ['./service-categories.component.scss'],
})
export class ServiceCategoriesComponent implements OnInit, OnDestroy {

  serviceCategories: ServiceCategory[] = [];

  private readonly subscriptions = new Subscription();

  constructor(private apiDataService: ApiDataService) { }

  ngOnInit(): void {

    this.subscriptions.add(
      this.apiDataService.getData(env.routes.services.getServiceCategories, false, 'get').subscribe((response) => {
        this.serviceCategories = response.data as ServiceCategory[];
      },(err) => {
        console.error(err);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
