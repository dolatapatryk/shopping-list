import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const departmentsModule = () => import('./departments/departments.module').then(x => x.DepartmentsModule);
const productsModule = () => import('./products/products.module').then(x => x.ProductsModule);

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
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
