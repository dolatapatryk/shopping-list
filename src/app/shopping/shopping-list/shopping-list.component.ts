import { Component, OnInit } from '@angular/core';
import { ShoppingList } from '../../models/shopping-list';
import { ActivatedRoute } from '@angular/router';
import { ShoppingListProduct } from '../../models/product';
import { DepartmentService } from '../../services/department.service';
import { Department } from '../../models/department';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
    list: ShoppingList;
    checkedCount = 0;
    allChecked = false;
    departments: Department[];

    constructor(private route: ActivatedRoute, private departmentsService: DepartmentService) {
    }

    ngOnInit(): void {
        this.list = this.route.snapshot.data.list;
        this.checkedCount = this.list.products.filter(product => product.mark).length;
        this.checkAllMarked();
        this.departmentsService.getDepartments().subscribe(body => this.departments = body);
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
