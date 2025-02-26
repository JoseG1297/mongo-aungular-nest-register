import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // 🔥 Necesario para *
import { ProductStateService } from '../../../states/product-state.service';
import { ProductCardComponent } from '../ui/product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true, // ⬅️ Indica que el componente es independiente
  imports: [CommonModule, ProductCardComponent], // ⬅️ Agrega CommonModule aquí
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  productState = inject(ProductStateService);
}