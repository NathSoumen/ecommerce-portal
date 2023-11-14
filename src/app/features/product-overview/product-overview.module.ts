import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductOverviewComponent } from './product-overview.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProductOverviewComponent,
  },
];

@NgModule({
  declarations: [ProductOverviewComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [ProductOverviewComponent],
})
export class ProductOverviewModule {}
