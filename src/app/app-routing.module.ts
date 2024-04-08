import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { HomeModule } from './modules/home/home.module';
import { DetailsModule } from './modules/details/details.module';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then((m) => m.LoginModule),
 },
 {
    component: LayoutComponent,
    path: '',
    children: [{
      path: '',
      loadChildren: () => import('./modules/home/home.module').then((m) => HomeModule),
    },{
      path: 'details',
      loadChildren: () => import('./modules/details/details.module').then((m) => DetailsModule),
    }]
 },
 {
    component: LayoutComponent,
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
