import { Component, Inject } from '@angular/core';
import { ShoppingList } from '../../models/shopping-list';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ShoppingListsService } from '../../services/shopping-lists.service';
import { Router } from '@angular/router';

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
        private router: Router
    ) {
        // this.shoppingList = { products: this.data.products, name: '' };
    }

    save() {
        this.shoppingListsService.save(this.shoppingList);
        this.router.navigate(['/']).then(() => this.dialogRef.close());
    }
}
