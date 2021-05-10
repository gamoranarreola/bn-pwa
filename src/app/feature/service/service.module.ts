import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { ServiceRoutingModule } from './service-routing.module';
import { ServiceCategoriesComponent } from './components/service-categories/service-categories.component';
import { RouterModule } from '@angular/router';
import { ServiceCategoryComponent } from './components/service-category/service-category.component';
import { ServiceComponent } from './components/service/service.component';
import { CalendarModule } from '../calendar/calendar.module';


@NgModule({
  declarations: [
    ServiceCategoriesComponent,
    ServiceCategoryComponent,
    ServiceComponent
  ],
  imports: [
    CommonModule,
    ServiceRoutingModule,
    IonicModule,
    RouterModule,
    CalendarModule
  ]
})
export class ServiceModule { }
