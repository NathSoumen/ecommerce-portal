import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';

import { RouterModule, Routes } from '@angular/router';
import { SharedModulesModule } from '../shared-modules/shared-modules.module';
import { ProductCardModule } from '../shared-modules/product-card/product-card.module';
import { CarouselConfig, CarouselModule } from 'ngx-bootstrap/carousel';

const routes: Routes = [{ path: '', component: HomePageComponent }];

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ProductCardModule,
    CarouselModule.forRoot(),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: CarouselConfig,
      useValue: { interval: 1500, noPause: true, showIndicators: true },
    },
  ],
})
export class HomePageModule {}
