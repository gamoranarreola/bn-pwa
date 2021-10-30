import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceCategoriesComponent } from './components/service-categories/service-categories.component';
import { ServiceCategoryComponent } from './components/service-category/service-category.component';
import { ServiceComponent } from './components/service/service.component';

const routes: Routes = [
  {
    path: '',
    component: ServiceCategoriesComponent
  },
  /**
  {
    path: ':serviceCategoryId/services',
    component: ServiceCategoryComponent
  },
  {
    path: ':serviceCategoryId/services/:serviceId',
    component: ServiceComponent
  }
  **/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRoutingModule { }
