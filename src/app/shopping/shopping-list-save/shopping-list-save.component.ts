import { Component, Inject } from '@angular/core';
import { ShoppingList } from '../../models/shopping-list';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ShoppingListsService } from '../../services/shopping-lists.service';
import { Router } from '@angular/router';
import { ToastService } from '../../services/toast-service';

@Component({
    selector: 'app-shopping-list-save',
    templateUrl: './shopping-list-save.component.html',
    styleUrls: ['./shopping-list-save.component.scss']
})
export class ShoppingListSaveComponent {
    shoppingList: ShoppingList;

    constructor(
        @Inject(MAT_DIALOG_DATA) private data: any,
        private dialogRef: MatDialogRef<ShoppingListSaveComponent>,
        private shoppingListsService: ShoppingListsService,
        private router: Router,
        private toastService: ToastService
    ) {
        this.shoppingList = { id: null, products: this.data.products, name: '' };
    }

    save() {
        this.shoppingListsService.save(this.shoppingList).subscribe(
            () => {
                this.toastService.success();
                this.router.navigate(['/']).then(() => this.dialogRef.close());
            },
            () => this.toastService.error()
        );
    }
}
