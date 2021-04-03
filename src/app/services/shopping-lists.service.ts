import { Injectable } from '@angular/core';
import { ShoppingList } from '../models/shopping-list';
import { ServiceHelper } from '../helpers/service.helper';

@Injectable({
    providedIn: 'root'
})
export class ShoppingListsService {
    shoppingLists: ShoppingList[] = [
        { id: 1, name: 'Biedronka - weekend', description: 'Zakupy w biedronce na weekend', products: [] },
        { id: 2, name: 'LIDL - grill', description: 'Zakupy na grillka', products: [] }
    ];

    constructor() {
        console.log(':::shopping list constructor service');
    }

    getShoppingLists(): ShoppingList[] {
        return this.shoppingLists;
    }

    addShoppingList(list: ShoppingList) {
        list.id = ServiceHelper.getNextId(this.shoppingLists);
        const products = [];
        list.products.forEach(p => products.push({ ...p, mark: false }));
        list.products = products;
        this.shoppingLists.push(list);
    }

    getById(listId: number) {
        console.log(':::all', this.shoppingLists);
        return this.shoppingLists.find(l => l.id === listId);
    }
}
