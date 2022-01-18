import { Component, Inject } from '@angular/core';
import { Department } from '../../models/department';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastService } from '../../services/toast-service';
import { DepartmentService } from '../../services/department.service';

@Component({
    selector: 'app-department-save',
    templateUrl: './department-save.component.html',
    styleUrls: ['./department-save.component.scss']
})
export class DepartmentSaveComponent {
    department: Department;

    constructor(
        @Inject(MAT_DIALOG_DATA) private data: any,
        private dialogRef: MatDialogRef<DepartmentSaveComponent>,
        private departmentService: DepartmentService,
        private toastService: ToastService
    ) {
        this.department = { ...this.data.department } || { id: null, name: null };
    }

    save() {
        this.departmentService.save(this.department).subscribe(
            () => {
                this.toastService.success();
                this.dialogRef.close(true);
            },
            () => this.toastService.error()
        );
    }
}
