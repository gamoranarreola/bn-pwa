/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import * as moment from 'moment';

import { environment as env } from '../../../../../environments/environment';
import { ApiDataService } from 'src/app/core/services/api-data.service';
import { ServiceSpecialty } from '../../models/service-specialty';
import { Service } from '../../models/service.class';
import { Beautier } from 'src/app/feature/beautier/models/beautier.class';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent implements OnInit {

  serviceById$: Observable<Service>;
  service: Service;
  serviceDurationDisplay: any;
  qualifiedBeautiers$: Observable<Beautier[]>;
  qualifiedBeautiers: Beautier[];

  /**
   *
   * @param activatedRoute
   * @param apiDataService
   */
  constructor(
    private activatedRoute: ActivatedRoute,
    private apiDataService: ApiDataService
  ) { }

  /**
   *
   */
  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(params => {

      this.serviceById$ = this.apiDataService.getData(`${env.routes.services.getServices}/${params.get('serviceId')}`, false, 'get');

      this.serviceById$.subscribe((res1: any) => {

        this.service = new Service(res1.data);
        this.serviceDurationDisplay = this.getServiceDurationDisplay();

        this.qualifiedBeautiers$ = this.apiDataService.getData(`${env.routes.beautiers.getBeautiersForSpecialty}`, false, 'post', {
          specialty_ids: this.service.specialties.map((specialty: ServiceSpecialty) => specialty.id)
        });

        this.qualifiedBeautiers$.subscribe((res2: any) => {
          this.qualifiedBeautiers = res2.data.map((beautier: Beautier) => new Beautier(beautier));
        });
      });
    });
  }

  /**
   *
   */
  private getServiceDurationDisplay(): string {

    const serviceDuration = moment(this.service.duration, 'hh:mm');
    const hours: number = serviceDuration.get('hours');
    const minutes: number = serviceDuration.get('minutes');

    return `${hours > 0 ? hours + (hours > 1 ? ' horas' : ' hora') : ''} ${minutes > 0 ? minutes + ' minutos' : ''}`;
  }

}
