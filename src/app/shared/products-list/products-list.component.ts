import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Product, ShoppingListProduct } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ProductSaveComponent } from '../product-save/product-save.component';
import { DepartmentService } from '../../services/department.service';
import { Department } from '../../models/department';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit, AfterViewInit, OnDestroy {
    products: ShoppingListProduct[];
    filteredProducts: ShoppingListProduct[];
    departments: Department[];
    private searchSub: Subscription;

    @Input()
    searchable = false;

    @Input()
    addButtonVisible = true;

    @Input()
    enableSwipe = true;

    @Input()
    selectable = false;

    @Input()
    chosen: ShoppingListProduct[];

    @Output()
    itemClicked: EventEmitter<ShoppingListProduct> = new EventEmitter<ShoppingListProduct>();

    @ViewChild('searchInput', { static: false }) searchInput: ElementRef;

    constructor(private productService: ProductService, private departmentsService: DepartmentService, private dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.productService.getProducts().subscribe(body => {
            this.products = this.filteredProducts = body as ShoppingListProduct[];
        });
        this.departmentsService.getDepartments().subscribe(body => this.departments = body);
    }

    ngAfterViewInit(): void {
        if (this.searchInput) {
            this.searchSub = fromEvent(this.searchInput.nativeElement, 'keyup')
                .pipe(
                    debounceTime(100),
                    distinctUntilChanged(),
                    tap(() => this.searchInputChange(this.searchInput.nativeElement.value))
                ).subscribe();
        }
    }

    ngOnDestroy(): void {
        if (this.searchSub) {
            this.searchSub.unsubscribe();
        }
        this.resetProducts();
    }

    addProduct() {
        this.openProductSaveDialog(null);
    }

    editProduct(productToEdit: Product) {
        this.openProductSaveDialog(productToEdit);
    }

    private openProductSaveDialog(product: Product) {
        this.dialog.open(ProductSaveComponent, {
            minWidth: '300px',
            data: { product }
        });
    }

    deleteProduct(productToDelete: Product) {
        this.productService.deleteProduct(productToDelete.id);
    }

    searchInputChange(value: string) {
        value = value ? value.toLocaleLowerCase() : '';
        this.filteredProducts = this.products.filter(product => product.name.toLocaleLowerCase().includes(value));
    }

    clearSearch() {
        this.searchInput.nativeElement.value = null;
        this.searchInputChange(null);
    }

    markItemChange(item: ShoppingListProduct, checked: boolean) {
        item.mark = checked;
        if (checked) {
            this.itemClicked.emit(item);
        } else {
            item.quantity = null;
            this.chosen.splice(this.chosen.indexOf(item), 1);
        }
    }

    resetProducts() {
        this.products.forEach(p => {
            p.quantity = null;
            p.mark = false;
        });
    }
}
