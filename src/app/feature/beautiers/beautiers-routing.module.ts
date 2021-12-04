import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeautiersPage } from './beautiers.page';

const routes: Routes = [
  {
    path: '',
    component: BeautiersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeautiersPageRoutingModule {}
