import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

export const routes: Routes = [{
    path: '',
    component: ProductListComponent
},
{
    path: 'products',
    component: ProductListComponent
},
{
    path: 'products/create/:id',
    component: ProductFormComponent
},
{
    path: 'products/edit/:id',
    component: ProductFormComponent
}
];

@NgModule({
    imports: [],
    exports: []
})
export class AppRoutesModule { }
