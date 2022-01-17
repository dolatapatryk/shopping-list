import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable, OperatorFunction } from 'rxjs';
import { Cacheable, CacheableService } from 'angular-cacheable';
import { tap } from 'rxjs/operators';

interface ProductRequestBody {
    name: string;
    departmentId: number;
}

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private static CACHE_KEY = 'get-products';
    private url = 'http://localhost:8090/api/products';

    constructor(private http: HttpClient) {
    }

    @Cacheable({ key: ProductService.CACHE_KEY })
    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>('http://localhost:8090/api/products');
    }

    saveProduct(product: Product) {
        console.log(':::product', product);
        if (product.id) {
            return this.editProduct(product.id, product);
        } else {
            return this.addNewProduct(product);
        }
    }

    private addNewProduct(product: Product) {
        console.log(':::add new product');
        return this.http.post(this.url, this.getRequestBody(product)).pipe(this.invalidateCache());
    }

    private editProduct(id: number, product: Product) {
        const url = `${this.url}/${id}`;
        return this.http.put(url, this.getRequestBody(product)).pipe(this.invalidateCache());
    }

    private getRequestBody(product: Product): ProductRequestBody {
        return { name: product.name, departmentId: product.departmentId };
    }

    deleteProduct(id: number) {
        const url = `${this.url}/${id}`;
        return this.http.delete(url).pipe(this.invalidateCache());
    }

    private invalidateCache(): OperatorFunction<any, any> {
        console.log('Invalidate product cache');
        return tap(() => CacheableService.getInstance().invalidate(ProductService.CACHE_KEY));
    }
}
