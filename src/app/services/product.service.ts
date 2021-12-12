import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cacheable } from 'angular-cacheable';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private http: HttpClient) {
        console.log('::::init product service');
    }

    @Cacheable({ key: 'get-products' })
    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>('http://localhost:8090/api/products');
    }

    saveProduct(product: Product) {
        if (product.id) {
            this.editProduct(product.id, product);
        } else {
            this.addNewProduct(product);
        }
    }

    private addNewProduct(product: Product) {
        // const id = ServiceHelper.getNextId(this.products);
        // this.products.push({ ...product, id });
        // this.saveToLocalStorage();
    }

    private editProduct(id: number, product: Product) {
        // const existingProduct = this.products.find(p => p.id === id);
        // if (existingProduct) {
        //     existingProduct.name = product.name;
        //     existingProduct.departmentId = product.departmentId;
        //     existingProduct.unitId = product.unitId;
        // }
    }

    deleteProduct(id: number) {
        // if (!id) {
        //     return;
        // }
        // const index = this.products.findIndex(p => p.id = id);
        // this.products.splice(index, 1);
        // this.saveToLocalStorage();
    }
}
