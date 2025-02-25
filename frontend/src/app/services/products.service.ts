import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './models/product.model'; // Define un modelo de producto
import { BaseHttpService } from './http/base-http.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends BaseHttpService{

  private newUrl = this.apiUrl + "/products";

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this. newUrl);
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${this. newUrl}/${id}`);
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this. newUrl, product);
  }

  updateProduct(id: string, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this. newUrl}/${id}`, product);
  }

  deleteProduct(id: string): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this. newUrl}/${id}`);
  }
}