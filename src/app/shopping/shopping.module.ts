import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingRoutingModule } from './shopping-routing.module';
import { ShoppingListsComponent } from './shopping-lists/shopping-lists.component';
import { SharedModule } from '../shared/shared.module';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';
import { ProductListAddComponent } from './product-list-add/product-list-add.component';
import { FormsModule } from '@angular/forms';
import { ShoppingListSaveComponent } from './shopping-list-save/shopping-list-save.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';


@NgModule({
    declarations: [
        ShoppingListsComponent,
        ShoppingListEditComponent,
        ProductListAddComponent,
        ShoppingListSaveComponent,
        ShoppingListComponent
    ],
    imports: [
        CommonModule,
        ShoppingRoutingModule,
        SharedModule,
        FormsModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: []
})
export class ShoppingModule {
}
