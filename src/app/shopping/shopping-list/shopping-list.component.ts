import { Component, OnInit } from '@angular/core';
import { ShoppingList } from '../../models/shopping-list';
import { ActivatedRoute } from '@angular/router';
import { ShoppingListProduct } from '../../models/product';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
    list: ShoppingList;
    checkedCount = 0;
    allChecked = false;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.list = this.route.snapshot.data.list;
        this.checkedCount = this.list.products.filter(product => product.mark).length;
        this.checkAllMarked();
    }

    markItemChange(item: ShoppingListProduct, checked: boolean) {
        item.mark = checked;
        this.checkedCount += checked ? 1 : -1;
        this.checkAllMarked();
    }

    private checkAllMarked() {
        this.allChecked = this.checkedCount === this.list.products.length;
    }
}
