import { Injectable, inject } from "@angular/core";
import { signalSlice } from "ngxtension/signal-slice"

import { Product } from "../services/models/product.model";
import { ProductsService } from "../services/products.service";

import { map } from 'rxjs/operators';



interface State {
    products: Product[];
    status: 'loading' | 'success' | 'error';
}

@Injectable({ providedIn: 'root' })
export class ProductStateService {
    private productsService = inject(ProductsService);

    private initialState: State = {
        products: [],
        status: 'loading'
    };

    // Convirtiendo el Observable en un signal reactivo
    state = signalSlice({  // <--- Especificamos el tipo explícitamente
        initialState: this.initialState,
        sources: [
          this.productsService.getProducts().pipe(
            map((products: Product[]) => ({ products, status: "success" as const }))
          )
        ]
      });
}