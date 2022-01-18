import { Component, Inject, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { Department } from '../../models/department';
import { DepartmentService } from '../../services/department.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductService } from '../../services/product.service';
import { ToastService } from '../../services/toast-service';

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
        private departmentService: DepartmentService,
        private toastService: ToastService
    ) {
        this.product = { ...this.data.product } || { id: null, name: null, departmentId: null, unitId: null };
    }

    ngOnInit(): void {
        this.departmentService.findAll().subscribe(body => this.departments = body);
    }

    save() {
        this.productService.save(this.product).subscribe(
            () => {
                this.toastService.success();
                this.dialogRef.close(true);
            },
            () => this.toastService.error()
        );
    }
}
