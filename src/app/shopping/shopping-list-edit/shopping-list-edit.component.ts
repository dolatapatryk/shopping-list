import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingListsService } from '../../services/shopping-lists.service';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
    selector: 'app-shopping-list-edit',
    templateUrl: './shopping-list-edit.component.html',
    styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit {
    products: Product[];

    constructor(
        private shoppingListsService: ShoppingListsService,
        private router: Router,
        private route: ActivatedRoute,
        private productsService: ProductsService
    ) {
    }

    ngOnInit(): void {
        this.products = this.productsService.getProducts();
    }

    back() {
        this.router.navigate(['../'], { relativeTo: this.route });
    }
}
