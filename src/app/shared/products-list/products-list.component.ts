import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit, AfterViewInit, OnDestroy {
    products: Product[];
    filteredProducts: Product[];
    private searchSub: Subscription;

    @Input()
    searchable = false;

    @Input()
    addButtonVisible = true;

    @Input()
    enableSwipe = true;

    @Output()
    itemClicked: EventEmitter<Product> = new EventEmitter<Product>();

    @ViewChild('searchInput', { static: false }) searchInput: ElementRef;

    constructor(private productsService: ProductsService) {
    }

    ngOnInit(): void {
        this.products = this.filteredProducts = this.productsService.getProducts();
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
    }

    addProduct() {
        this.productsService.addProduct(
            { id: 100, name: 'Test', departmentId: 12, unit: null }
        );
    }

    searchInputChange(value: string) {
        value = value ? value.toLocaleLowerCase() : '';
        this.filteredProducts = this.products.filter(product => product.name.toLocaleLowerCase().includes(value));
    }

    clearSearch() {
        this.searchInput.nativeElement.value = null;
        this.searchInputChange(null);
    }
}
