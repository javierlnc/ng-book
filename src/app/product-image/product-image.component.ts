import { Component, Input } from '@angular/core';
import { Product } from '../products.model';

@Component({
  selector: 'product-image',
  template: `<img class="product-image" [src]="product.imageUrl">`,
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent {
  @Input()
  product!: Product;

}
