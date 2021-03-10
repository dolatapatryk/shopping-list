import { Injectable } from '@angular/core';
import { ShoppingList } from '../models/shopping-list';

@Injectable({
    providedIn: 'root'
})
export class ShoppingListsService {
    shoppingLists: ShoppingList[] = [
        { name: 'Biedronka - weekend', description: 'Zakupy w biedronce na weekend', products: [] },
        { name: 'LIDL - grill', description: 'Zakupy na grillka', products: [] }
    ];

    constructor() {
        console.log(':::shopping list constructor service');
    }

    getShoppingLists(): ShoppingList[] {
        return this.shoppingLists;
    }
}
