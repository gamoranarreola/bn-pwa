import { Component, OnInit } from '@angular/core';

import { ApiDataService } from 'src/app/core/services/api-data.service';
import { ServiceCategory } from '../../models/service-category.class';
import { environment as env } from '../../../../../environments/environment';

@Component({
  selector: 'app-service-categories',
  templateUrl: './service-categories.component.html',
  styleUrls: ['./service-categories.component.scss'],
})
export class ServiceCategoriesComponent implements OnInit {

  serviceCategories: ServiceCategory[] = [];

  constructor(private apiDataService: ApiDataService) { }

  ngOnInit() {

    this.apiDataService.readData(env.routes.services.getServiceCategories, false, 'get').subscribe(response => {
      this.serviceCategories = response.data.map(serviceCategory => new ServiceCategory(serviceCategory));
    });
  }

}
