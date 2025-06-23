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
  path: 'mis-datos',
  loadComponent: () => import('./componentes/mis-datos/mis-datos.component').then(m => m.MisDatosComponent)
},
{
  path: 'experiencia-laboral',
  loadComponent: () => import('./componentes/experiencia-laboral/experiencia-laboral.component').then(m => m.ExperienciaLaboralComponent)
},
{
  path: 'certificaciones',
  loadComponent: () => import('./componentes/certificaciones/certificaciones.component').then(m => m.CertificacionesComponent)
},
{
    path: 'api-local',
    loadChildren: () => import('./pages/api-local/api-local.module').then( m => m.ApiLocalPageModule)
  },
  {
    path: 'ubicacion',
    loadChildren: () => import('./pages/ubicacion/ubicacion.module').then( m => m.UbicacionPageModule)
  },
  {
    path: 'foto',
    loadChildren: () => import('./pages/foto/foto.module').then( m => m.FotoPageModule)
  },

{
    path: 'api-externa',
    loadChildren: () => import('./pages/api-externa/api-externa.module').then( m => m.ApiExternaPageModule)
  },

  {
    path: 'not-found',
    loadChildren: () => import('./not-found/not-found.module').then( m => m.NotFoundPageModule)
  },
  
  {
  path: '**',
  loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundPageModule)
},


  

  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
