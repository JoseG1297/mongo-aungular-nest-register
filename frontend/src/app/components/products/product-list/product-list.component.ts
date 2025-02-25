import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // 🔥 Necesario para *
import { ProductStateService } from '../../../states/product-state.service';

@Component({
  selector: 'app-product-list',
  standalone: true, // ⬅️ Indica que el componente es independiente
  imports: [CommonModule], // ⬅️ Agrega CommonModule aquí
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  productState = inject(ProductStateService);
}