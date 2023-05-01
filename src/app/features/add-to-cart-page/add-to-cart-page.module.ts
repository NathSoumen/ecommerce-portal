import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddToCartPageComponent } from './add-to-cart-page.component';
import { RouterModule, Routes } from '@angular/router';
const routes :Routes = [{path:"",component:AddToCartPageComponent}]

@NgModule({
  declarations: [AddToCartPageComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class AddToCartPageModule { }
