import { Routes } from "@angular/router";
import { ProductListComponent } from "../product-list/product-list.component";


export default [
  { path: '', component: ProductListComponent },
  {
    path: '**',
    redirectTo: 'products',
    pathMatch: 'full'
  }
] as Routes;