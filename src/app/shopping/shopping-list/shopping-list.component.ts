import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShoppingList } from '../../models/shopping-list';
import { ActivatedRoute } from '@angular/router';
import { ShoppingListProduct } from '../../models/product';
import { DepartmentService } from '../../services/department.service';
import { Department } from '../../models/department';
import { WebSocketService } from '../ws/web-socket.service';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
    list: ShoppingList;
    checkedCount = 0;
    allChecked = false;
    departments: Department[];
    private webSocketService: WebSocketService;

    constructor(private route: ActivatedRoute, private departmentsService: DepartmentService) {
    }

    ngOnInit(): void {
        this.list = this.route.snapshot.data.list;
        this.webSocketService = new WebSocketService(this);
        this.webSocketService.connect(this.list.id);
        this.departmentsService.findAll().subscribe(body => this.departments = body);
    }

    ngOnDestroy() {
        this.webSocketService.disconnect();
    }

    updateProducts(products: ShoppingListProduct[]) {
        this.list.products = products;
        this.checkedCount = this.list.products.filter(product => product.mark).length;
        this.checkAllMarked();
    }

    markItemChange(item: ShoppingListProduct, checked: boolean) {
        item.mark = checked;
        this.checkedCount += checked ? 1 : -1;
        this.checkAllMarked();
        this.webSocketService.send();
    }

    private checkAllMarked() {
        this.allChecked = this.checkedCount === this.list.products.length;
    }
}
