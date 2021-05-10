import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { environment as env } from '../../../../../environments/environment';
import { ApiDataService } from 'src/app/core/services/api-data.service';
import { Service } from '../../models/service.class';

@Component({
  selector: 'app-service-category',
  templateUrl: './service-category.component.html',
  styleUrls: ['./service-category.component.scss'],
})
export class ServiceCategoryComponent implements OnInit {

  services: Service[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiDataService: ApiDataService
  ) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe((params: any) => {
      this.apiDataService.readData(`${env.routes.services.getServicesForCategory}/${params.get('serviceCategoryId')}`, false, 'get').subscribe(response => {
        this.services = response.data.map(service => new Service(service));
      });
    });
  }

}
