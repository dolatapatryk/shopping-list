import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import products from '../../assets/products.json';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    constructor() {
        console.log('::::init product service');
    }

    getProducts(): Product[] {
        return products;
    }

    addProduct(product: Product) {
        products.push(product);
    }
}
