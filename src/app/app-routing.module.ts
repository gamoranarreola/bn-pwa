import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

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
    loadChildren: () => import('./feature/beautiers/beautiers.module').then( m => m.BeautiersPageModule),
    data: {
      breadcrumb: 'Inicio'
    }
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'weddings',
    loadChildren: () => import('./feature/weddings/weddings.module').then(m => m.WeddingsModule),
    data: {
      breadcrumb: 'Bodas'
    }
  },
  {
    path: 'service-categories',
    loadChildren: () => import('./feature/service/service.module').then(m => m.ServiceModule),
    data: {
      breadcrumb: 'Servicios'
    }
  },
  {
    path: 'shopping-cart',
    loadChildren: () => import ('./feature/shopping-cart/shopping-cart.module').then(m => m.ShoppingCartModule),
    canActivate: [AuthGuard],
    data: {
      breadcrumb: 'Carrito'
    }
  },
  {
    path: 'user-profile',
    loadChildren: () => import ('./feature/user-profile/user-profile.module').then(m => m.UserProfileModule),
    canActivate: [AuthGuard],
    data: {
      breadcrumb: 'Mi Perfil'
    }
  },
  {
    path: 'gallery',
    loadChildren: () => import ('./feature/gallery/gallery.module').then(m => m.GalleryModule),
   // canActivate: [AuthGuard],
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
    loadChildren: () => import('./feature/beautiers/beautiers.module').then( m => m.BeautiersPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
