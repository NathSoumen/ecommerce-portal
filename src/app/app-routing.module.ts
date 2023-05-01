import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path:"",pathMatch:"full",redirectTo:"app"},
  {path:"app",loadChildren:() => import('./features/home-page/home-page.module').then((m )=> m.HomePageModule)},
  {path:"login",loadChildren:()=> import('./features/login-page/login-page.module').then((m)=>m.LoginPageModule)},
  {path:"**",redirectTo:"app"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
