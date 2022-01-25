import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cacheable } from 'angular-cacheable';
import { AbstractService } from './abstract-service';

interface ProductRequestBody {
    name: string;
    departmentId: number;
}

@Injectable({
    providedIn: 'root'
})
export class ProductService extends AbstractService<Product, ProductRequestBody> {
    private static CACHE_KEY = 'get-products';
    private static URL = 'api/products';

    constructor(http: HttpClient) {
        super(http, ProductService.URL, ProductService.CACHE_KEY);
    }

    @Cacheable({ key: ProductService.CACHE_KEY })
    findAll(): Observable<Product[]> {
        return super.findAll();
    }

    protected getRequestBody(product: Product): ProductRequestBody {
        return { name: product.name, departmentId: product.departmentId };
    }
}
