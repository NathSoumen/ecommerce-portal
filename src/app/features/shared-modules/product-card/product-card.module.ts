import { CUSTOM_ELEMENTS_SCHEMA, NgModule,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card.component';



@NgModule({
  declarations: [
    ProductCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ProductCardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class ProductCardModule { }
