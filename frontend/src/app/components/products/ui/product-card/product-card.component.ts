import { Component, input } from '@angular/core';
import { Product } from '../../../../services/models/product.model';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styles: ``
})
export class ProductCardComponent {
  product = input.required<Product>();
}
