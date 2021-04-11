import { Injectable } from '@angular/core';
import { ShoppingList } from '../models/shopping-list';
import { ServiceHelper } from '../helpers/service.helper';

const LOCAL_STORAGE_KEY = 'shoppingLists';

@Injectable({
    providedIn: 'root'
})
export class ShoppingListsService {
    shoppingLists: ShoppingList[];

    constructor() {
        console.log(':::shopping list constructor service');
        const lists = localStorage.getItem(LOCAL_STORAGE_KEY);
        this.shoppingLists = lists ? JSON.parse(lists) : [];
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
        this.saveToLocalStorage();
    }

    getById(listId: number) {
        return this.shoppingLists.find(l => l.id === listId);
    }

    deleteShoppingList(list: ShoppingList) {
        const index = this.shoppingLists.findIndex(l => l.id === list.id);
        this.shoppingLists.splice(index, 1);
        this.saveToLocalStorage();
    }

    private saveToLocalStorage() {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.shoppingLists));
    }
}
