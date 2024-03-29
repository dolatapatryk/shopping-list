import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListsComponent } from './shopping-lists/shopping-lists.component';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';

const routes: Routes = [
    {
        path: '',
        component: ShoppingListsComponent,
        pathMatch: 'full'
    },
    {
        path: 'add',
        component: ShoppingListEditComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShoppingRoutingModule {
}
