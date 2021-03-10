import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const shoppingListsModule = () => import('./shopping/shopping.module').then(x => x.ShoppingModule);
const departmentsModule = () => import('./departments/departments.module').then(x => x.DepartmentsModule);
const productsModule = () => import('./products/products.module').then(x => x.ProductsModule);

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: '',
                redirectTo: 'shopping',
                pathMatch: 'full'
            },
            { path: 'shopping', loadChildren: shoppingListsModule },
            { path: 'departments', loadChildren: departmentsModule },
            { path: 'products', loadChildren: productsModule }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
