import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeautiersListComponent } from './components/beautiers-list/beautiers-list.component';


const routes: Routes = [
  {
    path: '',
    component: BeautiersListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeautierRoutingModule {}
