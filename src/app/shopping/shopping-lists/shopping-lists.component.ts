import { Component, OnInit } from '@angular/core';
import { ShoppingList } from '../../models/shopping-list';
import { ShoppingListsService } from '../../services/shopping-lists.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../../shared/confirmation-dialog/confirmation-dialog.component';

@Component({
    selector: 'app-shopping-lists',
    templateUrl: './shopping-lists.component.html',
    styleUrls: ['./shopping-lists.component.scss']
})
export class ShoppingListsComponent implements OnInit {
    lists: ShoppingList[];

    constructor(
        private shoppingListsService: ShoppingListsService,
        private router: Router,
        private route: ActivatedRoute,
        private dialog: MatDialog
    ) {
    }

    ngOnInit(): void {
        this.lists = this.shoppingListsService.getShoppingLists();
    }

    navigateToAddShoppingList() {
        this.router.navigate(['add'], { relativeTo: this.route });
    }

    goToList(list: ShoppingList) {
        this.router.navigate([list.id], { relativeTo: this.route });
    }

    deleteShoppingList(list: ShoppingList) {
        this.dialog.open(ConfirmationDialogComponent, {
            minWidth: '300px',
            data: {
                title: 'Usuń listę zakupów',
                message: `Czy jesteś pewien, że chcesz usunąć listę: ${list.name}`,
                action: () => this.shoppingListsService.deleteShoppingList(list)
            }
        });
    }
}
