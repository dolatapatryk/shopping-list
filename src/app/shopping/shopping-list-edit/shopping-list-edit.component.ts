import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingListProduct } from '../../models/product';
import { MatDialog } from '@angular/material/dialog';
import { ProductListAddComponent } from '../product-list-add/product-list-add.component';
import { ShoppingListSaveComponent } from '../shopping-list-save/shopping-list-save.component';

@Component({
    selector: 'app-shopping-list-edit',
    templateUrl: './shopping-list-edit.component.html',
    styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent {
    chosenProducts: ShoppingListProduct[] = [];

    constructor(
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

    save() {
        this.dialog.open(ShoppingListSaveComponent, {
            minWidth: '300px',
            data: { products: this.chosenProducts }
        });
    }
}
