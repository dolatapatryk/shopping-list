import { Component, OnInit } from '@angular/core';
import { ShoppingList } from '../../models/shopping-list';
import { ShoppingListsService } from '../../services/shopping-lists.service';
import { ActivatedRoute, Router } from '@angular/router';

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
        private route: ActivatedRoute
    ) {
    }

    ngOnInit(): void {
        this.lists = this.shoppingListsService.getShoppingLists();
    }

    navigateToAddShoppingList() {
        this.router.navigate(['add'], { relativeTo: this.route });
    }
}
