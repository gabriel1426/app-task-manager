import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('@app/presentation/auth/auth.routes').then((m) => m.routes)
  },
  {
    path: 'register',
    loadComponent: () => import('./presentation/auth/register/register.page').then((m) => m.RegisterPage)
  }
];
