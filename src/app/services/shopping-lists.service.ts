import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { AbstractService } from './abstract-service';
import { ShoppingList } from '../models/shopping-list';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Cacheable } from 'angular-cacheable';
import { Observable } from 'rxjs';

interface ShoppingListRequestBody {
    name: string;
    description?: string;
    products: { product: Product, marked: boolean, quantity: string }[];
}

@Injectable({
    providedIn: 'root'
})
export class ShoppingListsService extends AbstractService<ShoppingList, ShoppingListRequestBody> {
    public static CACHE_KEY = 'get-shopping-lists';
    private static URL = 'http://localhost:8090/api/shopping-lists';

    constructor(http: HttpClient) {
        super(http, ShoppingListsService.URL, ShoppingListsService.CACHE_KEY);
    }

    @Cacheable({ key: ShoppingListsService.CACHE_KEY })
    findAll(): Observable<ShoppingList[]> {
        return super.findAll();
    }

    closeList(listId: number): Observable<HttpResponse<any>> {
        const url = `${this.getIdUrl(listId)}/close`;
        return this.http.put(url, { observe: 'response' }).pipe(this.invalidateCache());
    }

    protected getRequestBody(list: ShoppingList, mode: 'add' | 'edit'): ShoppingListRequestBody {
        const products = list.products.map(p => {
            return { product: p as Product, marked: mode === 'add' ? false : p.mark, quantity: p.quantity };
        });
        return { name: list.name, description: list.description, products };
    }
}
