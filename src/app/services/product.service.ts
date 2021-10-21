import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import products from '../../assets/products.json';
import { ServiceHelper } from '../helpers/service.helper';

const LOCAL_STORAGE_KEY = 'products';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    products: Product[];

    constructor() {
        console.log('::::init product service');
        this.loadProducts();
    }

    private loadProducts() {
        const existingList = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (existingList) {
            console.log('::::found products in local storage');
            this.products = JSON.parse(existingList);
        } else {
            this.products = products;
            this.saveToLocalStorage();
        }
    }

    getProducts(): Product[] {
        return this.products;
    }

    saveProduct(product: Product) {
        if (product.id) {
            this.editProduct(product.id, product);
        } else {
            this.addNewProduct(product);
        }
    }

    private addNewProduct(product: Product) {
        const id = ServiceHelper.getNextId(this.products);
        this.products.push({ ...product, id });
        this.saveToLocalStorage();
    }

    private editProduct(id: number, product: Product) {
        const existingProduct = this.products.find(p => p.id === id);
        if (existingProduct) {
            existingProduct.name = product.name;
            existingProduct.departmentId = product.departmentId;
            existingProduct.unitId = product.unitId;
        }
    }

    deleteProduct(id: number) {
        if (!id) {
            return;
        }
        const index = this.products.findIndex(p => p.id = id);
        this.products.splice(index, 1);
        this.saveToLocalStorage();
    }

    private saveToLocalStorage() {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.products));
    }
}
