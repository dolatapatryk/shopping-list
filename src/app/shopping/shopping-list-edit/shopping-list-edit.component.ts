import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingListsService } from '../../services/shopping-lists.service';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';
import { MatDialog } from '@angular/material/dialog';
import { ProductListAddComponent } from '../product-list-add/product-list-add.component';

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
        private productsService: ProductsService,
        private dialog: MatDialog
    ) {
    }

    ngOnInit(): void {
        this.products = this.productsService.getProducts();
    }

    back() {
        this.router.navigate(['../'], { relativeTo: this.route });
    }

    addItemToList(item: Product) {
        console.log(':::item to list', item);
        this.dialog.open(ProductListAddComponent, {
            height: 'auto',
            width: 'auto'
        });
    }
}
