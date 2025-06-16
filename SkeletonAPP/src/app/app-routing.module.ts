import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SesionGuard } from './guards/sesion.guard';

const routes: Routes = [
  {path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
    
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [SesionGuard]  // ✅ Protección activada aquí
  },
  {
    path: 'not-found',
    loadChildren: () => import('./not-found/not-found.module').then( m => m.NotFoundPageModule)
  },
  {
  path: '**',
  loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundPageModule)
}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
