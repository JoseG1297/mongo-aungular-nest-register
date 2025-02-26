import { Routes } from "@angular/router";
import { ProductListComponent } from "../product-list/product-list.component";
import { ProductDatailComponent } from "../product-datail/product-datail.component";


export default [
  { path: '', component: ProductListComponent },
  { path: 'product/:id', component: ProductDatailComponent}
] as Routes;