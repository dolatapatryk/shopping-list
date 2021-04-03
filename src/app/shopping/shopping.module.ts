import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingRoutingModule } from './shopping-routing.module';
import { ShoppingListsComponent } from './shopping-lists/shopping-lists.component';
import { SharedModule } from '../shared/shared.module';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';
import { ProductListAddComponent } from './product-list-add/product-list-add.component';


@NgModule({
    declarations: [ShoppingListsComponent, ShoppingListEditComponent, ProductListAddComponent],
    imports: [
        CommonModule,
        ShoppingRoutingModule,
        SharedModule
    ]
})
export class ShoppingModule {
}
