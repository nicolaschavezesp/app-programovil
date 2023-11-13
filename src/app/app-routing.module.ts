import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'configuraciones',
    loadChildren: () => import('./configuraciones/configuraciones.module').then(m => m.ConfiguracionesPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then(m => m.PerfilPageModule)
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./recuperar/recuperar.module').then(m => m.RecuperarPageModule)
  },
  {
    path: 'qr-code',
    loadChildren: () => import('./qr-code/qr-code.module').then(m => m.QrCodePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'homeprincipal',
    loadChildren: () => import('./homeprincipal/homeprincipal.module').then(m => m.HomeprincipalPageModule)
  },
  { path: 'not-found', component: NotFoundComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirige al login por defecto
  { path: '**', redirectTo: '/not-found' },   {
    path: 'pageqr',
    loadChildren: () => import('./pageqr/pageqr.module').then( m => m.PageqrPageModule)
  },
// Redirige a 'not-found' para rutas no válidas
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
