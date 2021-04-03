import { Component, OnInit } from '@angular/core';
import { ShoppingList } from '../../models/shopping-list';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
    list: ShoppingList;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.list = this.route.snapshot.data.list;
        console.log(':::list', this.list);
    }

    markItemChange(item: any, checked: boolean) {
    }
}
