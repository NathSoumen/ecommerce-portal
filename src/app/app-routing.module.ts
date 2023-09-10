import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullLayoutComponent } from './features/layout/full-layout/full-layout.component';
import { NoLayoutComponent } from './features/layout/no-layout/no-layout.component';

const routes: Routes = [
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      {
        path: 'app',
        loadChildren: () =>
          import('./features/home-page/home-page.module').then(
            (m) => m.HomePageModule
          ),
      },
      {
        path: 'openCart',
        loadChildren: () =>
          import('./features/add-to-cart-page/add-to-cart-page.module').then(
            (m) => m.AddToCartPageModule
          ),
      },
    ],
  },
  {
    path: 'credential',
    component: NoLayoutComponent,
    children: [
      {path:"",redirectTo:"login",pathMatch:'full'},
      {path:"login",loadChildren:()=> import('./features/login-page/login-page.module').then((m)=>m.LoginPageModule)},

      {
        path: 'signin',
        loadChildren: () =>
          import('./features/add-to-cart-page/add-to-cart-page.module').then(
            (m) => m.AddToCartPageModule
          ),
      },
    ],
  },
  {path:"**",redirectTo:""},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
