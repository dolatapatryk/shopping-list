import { Component, Inject, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { Department } from '../../models/department';
import { DepartmentService } from '../../services/department.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductService } from '../../services/product.service';

@Component({
    selector: 'app-product-save',
    templateUrl: './product-save.component.html',
    styleUrls: ['./product-save.component.scss']
})
export class ProductSaveComponent implements OnInit {
    product: Product;
    departments: Department[] = [];

    constructor(
        @Inject(MAT_DIALOG_DATA) private data: any,
        private dialogRef: MatDialogRef<ProductSaveComponent>,
        private productService: ProductService,
        private departmentService: DepartmentService
    ) {
        this.product = { ...this.data.product } || { id: null, name: null, departmentId: null, unitId: null };
    }

    ngOnInit(): void {
        this.departmentService.getDepartments().subscribe(body => this.departments = body);
    }

    save() {
        console.log('Save button clicked');
        this.productService.saveProduct(this.product).subscribe(res => console.log(':::res', res));
    }
}
