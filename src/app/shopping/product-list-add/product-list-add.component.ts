import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ShoppingListProduct } from '../../models/product';

@Component({
    selector: 'app-product-list-add',
    templateUrl: './product-list-add.component.html',
    styleUrls: ['./product-list-add.component.scss']
})
export class ProductListAddComponent {
    product: ShoppingListProduct;

    constructor(
        @Inject(MAT_DIALOG_DATA) private data: any,
        private dialogRef: MatDialogRef<ProductListAddComponent>
    ) {
        this.product = this.data.product;
    }

    addItem() {
        this.product.mark = true;
        this.dialogRef.close(this.product);
    }
}
