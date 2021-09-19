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

  constructor(private apiDataService: ApiDataService) {
    if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      // true for mobile device
     // alert("mobile device");
     window.location.href = 'web';
    }
   }

  ngOnInit() {

    this.apiDataService.getData(env.routes.services.getServiceCategories, false, 'get').subscribe(response => {
      this.serviceCategories = response.data.map(serviceCategory => new ServiceCategory(serviceCategory));
    });
  }

}
