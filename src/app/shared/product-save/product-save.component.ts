import { Component, Inject, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { Department } from '../../models/department';
import { DepartmentService } from '../../services/department.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UnitService } from '../../services/unit.service';
import { Unit } from '../../models/unit';
import { ProductService } from '../../services/product.service';

@Component({
    selector: 'app-product-save',
    templateUrl: './product-save.component.html',
    styleUrls: ['./product-save.component.scss']
})
export class ProductSaveComponent implements OnInit {
    product: Product;
    departments: Department[] = [];
    units: Unit[] = [];

    constructor(
        @Inject(MAT_DIALOG_DATA) private data: any,
        private dialogRef: MatDialogRef<ProductSaveComponent>,
        private productService: ProductService,
        private departmentService: DepartmentService,
        private unitService: UnitService
    ) {
        this.product = { ...this.data.product } || { id: null, name: null, departmentId: null, unitId: null };
    }

    ngOnInit(): void {
        this.departments = this.departmentService.getDepartments();
        this.units = this.unitService.getUnits();
    }

    save() {
        this.productService.saveProduct(this.product);
    }
}
