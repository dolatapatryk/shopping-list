import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingListsService } from '../../services/shopping-lists.service';
import { ShoppingListProduct } from '../../models/product';
import { MatDialog } from '@angular/material/dialog';
import { ProductListAddComponent } from '../product-list-add/product-list-add.component';

@Component({
    selector: 'app-shopping-list-edit',
    templateUrl: './shopping-list-edit.component.html',
    styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent {
    chosenProducts: ShoppingListProduct[] = [];

    constructor(
        private shoppingListsService: ShoppingListsService,
        private router: Router,
        private route: ActivatedRoute,
        private dialog: MatDialog
    ) {
    }

    back() {
        this.router.navigate(['../'], { relativeTo: this.route });
    }

    addItemToList(item: ShoppingListProduct) {
        const dialogRef = this.dialog.open(ProductListAddComponent, {
            data: { product: item }
        });
        dialogRef.afterClosed().subscribe(prod => {
            const existing = this.chosenProducts.find(p => p.id === item.id);
            if (prod) {
                if (existing) {
                    existing.quantity = prod.quantity;
                } else {
                    this.chosenProducts.push(prod);
                }
            } else {
                if (!existing) {
                    item.mark = false;
                }
            }
        });
    }
}
