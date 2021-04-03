import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { ShoppingList } from '../../models/shopping-list';
import { ShoppingListsService } from '../../services/shopping-lists.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingListResolver implements Resolve<ShoppingList> {

    constructor(private service: ShoppingListsService) {
    }

    resolve(route: ActivatedRouteSnapshot) {
        const id = +route.params.listId;
        const list = this.service.getById(id);
        console.log(':::resolvelist', list);
        return this.service.getById(id);
    }
}
