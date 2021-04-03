import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ShoppingListProduct } from '../../models/product';

@Component({
    selector: 'app-product-list-add',
    templateUrl: './product-list-add.component.html',
    styleUrls: ['./product-list-add.component.scss']
})
export class ProductListAddComponent implements OnInit {
    product: ShoppingListProduct;

    constructor(
        @Inject(MAT_DIALOG_DATA) private data: any,
        private dialogRef: MatDialogRef<ProductListAddComponent>
    ) {
        this.product = this.data.product;
        this.product.quantity = this.product.quantity || 1;
    }

    ngOnInit(): void {
    }

    addItem() {
        this.product.mark = true;
        this.dialogRef.close(this.product);
    }
}
