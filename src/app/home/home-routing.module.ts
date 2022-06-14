import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataDeleteComponent } from './components/data-delete/data-delete.component';
import { HomePageComponent } from './components/home-page/home.page.component';
import { PrivacyComponent } from './components/privacy/privacy.component';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'privacy',
    component: PrivacyComponent
  },
  {
    path: 'data-delete',
    component: DataDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
