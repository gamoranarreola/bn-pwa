import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'web',
    loadChildren: () => import('./web/web.module').then( m => m.WebModule),   
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
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
    //canActivate: [AuthGuard],
    data: {
      breadcrumb: 'Carrito'
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
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
