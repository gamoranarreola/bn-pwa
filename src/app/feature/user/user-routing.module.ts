import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from './user.component';
import {ProfileComponent} from './profile/profile.component';
const routes: Routes = [
  {
    path: '',
    component: UserComponent
  },
  {
    path: 'profile:userId',
    component: ProfileComponent
  },
  // {
  //   path: ':serviceCategoryId/services/:serviceId',
  //   component: ServiceComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }