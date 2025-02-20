import { Routes } from '@angular/router';


export const routes: Routes = [{
    path: '',
    loadChildren: () => import('./components/products/product-shell/product.route.module')
},
{
    path: 'cart',
    loadChildren: () => import('./components/carts/cart-shell/cart.route.module')
}
];
