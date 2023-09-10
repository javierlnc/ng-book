import { Component, Input } from '@angular/core';
import { Product } from '../products.model';

@Component({
  selector: 'product-deparment',
  templateUrl: './product-deparment.component.html',
  styleUrls: ['./product-deparment.component.css']
})
export class ProductDeparmentComponent {
  @Input()
  product!: Product;
}
