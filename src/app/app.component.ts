import { Component } from '@angular/core';
import { Product } from './products.model';
import { ProductsListComponent } from './products-list/products-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-book-02';
  products: Product[];
  constructor() {
    this.products = [
      new Product(
        'MYSHOES',
        'Black Running Shoes',
        'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1681239712-s15-6435ae8b71263.png?crop=1xw:1xh;center,top&resize=980:*',
        ['Men', 'Shoes', 'Running Shoes'],
        109.99),
      new Product(
        'NEATOJACKET',
        'Blue Jacket',
        'https://www.dior.com/couture/ecommerce/media/catalog/product/l/J/1683715469_943C449A4462_C595_E01_GH.jpg',
        ['Women', 'Apparel', 'Jackets & Vests'],
        238.99),
      new Product(
        'NICEHAT',
        'A Nice Black Hat',
        'data:image/jpeg;base64,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',
        ['Men', 'Accessories', 'Hats'],
        29.99)
    ];
  }
  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
  }
}
