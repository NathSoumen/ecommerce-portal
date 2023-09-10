import { Component, OnChanges, SimpleChanges ,Input} from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnChanges {
  @Input()product :any
  productName:string = ''
  originalPrice:number = 0;
  discountedPrice:number = 0
  currencySymbal :string = '$'
  imageUrl :string = ''
  ngOnChanges(changes: SimpleChanges): void {
    if(changes["product"]) {
      this.productName = this.product.name
      this.originalPrice = this.product.originalPrice
      this.discountedPrice = this.product.discountedPrice
      this.imageUrl = this.product.imageUrl
    }
  } 
  addTocart(){
//     const foundToken = localStorage.getItem("token")
//     if(foundToken) {
// const token = JSON.parse(foundToken);
// console.log("token",token);

//     }
       const foundProduct= localStorage.getItem("addedToCart")
       if(foundProduct) {
        const  addedToCartsProducts:Array<any> =  JSON.parse(foundProduct);
        addedToCartsProducts.push(this.product)
        localStorage.setItem("addedToCart",JSON.stringify(addedToCartsProducts))

       }else{
        localStorage.setItem("addedToCart",JSON.stringify([this.product]))
       }
  }

}
