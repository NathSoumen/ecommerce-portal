import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
 
import { RouterModule, Routes } from '@angular/router';
import { SharedModulesModule } from '../shared-modules/shared-modules.module';
import { ProductCardModule } from '../shared-modules/product-card/product-card.module';
const routes :Routes = [{path:"",component:HomePageComponent}]

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),
    ProductCardModule
  ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class HomePageModule { }
