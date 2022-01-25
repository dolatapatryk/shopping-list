import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product';
import { DepartmentService } from '../../services/department.service';
import { Department } from '../../models/department';
import { WebSocketService } from '../ws/web-socket.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../../shared/confirmation-dialog/confirmation-dialog.component';
import { ShoppingListsService } from '../../services/shopping-lists.service';

interface ListProduct {
    product: Product;
    marked: boolean;
    quantity?: string;
}

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
    listId: number;
    products: ListProduct[];
    allChecked = false;
    departments: Department[];
    private webSocketService: WebSocketService;
    productSort = (a: ListProduct, b: ListProduct) => a.product.departmentId - b.product.departmentId;

    constructor(
        private route: ActivatedRoute,
        private departmentsService: DepartmentService,
        private dialog: MatDialog,
        private shoppingListService: ShoppingListsService,
        private router: Router
    ) {
    }

    ngOnInit(): void {
        this.listId = this.route.snapshot.params.listId;
        this.webSocketService = new WebSocketService(this);
        this.webSocketService.connect(this.listId);
        this.departmentsService.findAll().subscribe(body => this.departments = body);
    }

    ngOnDestroy() {
        this.webSocketService.disconnect();
    }

    updateProducts(products: ListProduct[]) {
        this.products = this.prepareProductList(products);
    }

    markItemChange(item: any, checked: boolean) {
        item.marked = checked;
        this.webSocketService.markProduct(item.product.id, checked);
    }

    private prepareProductList(products: ListProduct[]) {
        const sorted = products.sort((a, b) => {
            const departmentA = a.product.departmentId;
            const departmentB = b.product.departmentId;
            return departmentA - departmentB === 0 ? a.product.id - b.product.id : departmentA - departmentB;
        });
        const marked = sorted.filter(p => p.marked);
        this.allChecked = marked.length === products.length;
        const unmarked = sorted.filter(p => !p.marked);
        return [...unmarked, ...marked];
    }

    closeList() {
        const dialog = this.dialog.open(ConfirmationDialogComponent, {
            minWidth: '300px',
            data: {
                title: 'Zamknij listę zakupów',
                message: 'Czy chcesz zamknąć listę?'
            }
        });
        dialog.afterClosed().subscribe(result => {
            if (result) {
                this.webSocketService.closeList();
            }
        });
    }

    routeToMainScreen() {
        this.router.navigate(['/']);
    }
}
