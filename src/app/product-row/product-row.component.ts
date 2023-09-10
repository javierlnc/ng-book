import { Component, Input } from '@angular/core';
import { Product } from '../products.model';

@Component({
  selector: 'product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent {
  @Input()
  product!: Product;

}
