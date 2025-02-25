import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // 🔥 Necesario para *ngFor
import { ProductsService } from '../../../services/products.service';
import { Product } from '../../../services/models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true, // ⬅️ Indica que el componente es independiente
  imports: [CommonModule], // ⬅️ Agrega CommonModule aquí
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data: any) => {
      this.products = data;
    });
  }
}