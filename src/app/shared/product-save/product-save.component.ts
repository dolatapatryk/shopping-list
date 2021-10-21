import { Component, Inject, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { Department } from '../../models/department';
import { DepartmentsService } from '../../services/departments.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

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
        private departmentsService: DepartmentsService
    ) {
        this.product = this.data.product || { id: null, name: null, departmentId: null, unitId: null };
    }

    ngOnInit(): void {
        this.departments = this.departmentsService.getDepartments();
    }
}
