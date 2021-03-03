import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { SharedModule } from '../shared/shared.module';
import { ProductsService } from '../services/products.service';


@NgModule({
    declarations: [ProductsListComponent],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        SharedModule
    ],
    providers: [ProductsService]
})
export class ProductsModule {
}
