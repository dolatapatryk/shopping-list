import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
    products: Product[];

    constructor(private productsService: ProductsService) {
    }

    ngOnInit(): void {
        this.products = this.productsService.getProducts();
    }

    addProduct() {
        this.productsService.addProduct(
            { id: 100, name: 'Test', categoryId: 12, unit: null }
        );
    }
}
