import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderBarComponent } from './shared/components/header-bar/header-bar.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then((m) => m.LoginModule),
 },
 {
    component: HeaderBarComponent,
    path: '',
    loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule),
 },
 {
    component: HeaderBarComponent,
    path: 'details',
    loadChildren: () =>
       import('./modules/details/details.module').then((m) => m.DetailsModule),
 },
 {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
