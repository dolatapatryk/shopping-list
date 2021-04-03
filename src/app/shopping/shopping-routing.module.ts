import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListsComponent } from './shopping-lists/shopping-lists.component';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListResolver } from './shopping-list/shopping-list.resolver';

const routes: Routes = [
    {
        path: '',
        component: ShoppingListsComponent,
        pathMatch: 'full'
    },
    {
        path: 'add',
        component: ShoppingListEditComponent
    },
    {
        path: ':listId',
        resolve: { list: ShoppingListResolver },
        children: [
            {
                path: '',
                component: ShoppingListComponent
            },
            {
                path: 'edit',
                component: ShoppingListEditComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShoppingRoutingModule {
}
