import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    data: {
      breadcrumb: 'Inicio'
    }
  },  {
    path: 'beautiers',
    loadChildren: () => import('./feature/beautier/beautier.module').then( m => m.BeautierModule),
    data: {
      breadcrumb: 'Inicio'
    }
  },
  {
    path: 'weddings',
    loadChildren: () => import('./feature/weddings/weddings.module').then(m => m.WeddingsModule),
    data: {
      breadcrumb: 'Bodas'
    }
  },
  {
    path: 'shopping-cart',
    loadChildren: () => import ('./feature/shopping-cart/shopping-cart.module').then(m => m.ShoppingCartModule),
    data: {
      breadcrumb: 'Carrito'
    }
  },
  {
    path: 'gallery',
    loadChildren: () => import ('./feature/gallery/gallery.module').then(m => m.GalleryModule),
    data: {
      breadcrumb: 'Galeria de fotos'
    }
  }
  ,
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'beautiers',
    loadChildren: () => import('./feature/beautier/beautier.module').then( m => m.BeautierModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
