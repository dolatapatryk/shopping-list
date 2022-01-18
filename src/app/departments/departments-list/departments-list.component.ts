import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../services/department.service';
import { Department } from '../../models/department';
import { MatDialog } from '@angular/material/dialog';
import { DepartmentSaveComponent } from '../department-save/department-save.component';
import { ConfirmationDialogComponent } from '../../shared/confirmation-dialog/confirmation-dialog.component';

@Component({
    selector: 'app-departments-layout',
    templateUrl: './departments-list.component.html',
    styleUrls: ['./departments-list.component.scss']
})
export class DepartmentsListComponent implements OnInit {
    departments: Department[];

    constructor(private departmentService: DepartmentService, private dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.getDepartments();
    }

    private getDepartments() {
        this.departmentService.findAll().subscribe(body => this.departments = body);
    }

    addDepartment() {
        this.openDepartmentSaveDialog();
    }

    editDepartment(department: Department) {
        this.openDepartmentSaveDialog(department);
    }

    private openDepartmentSaveDialog(department: Department = null) {
        const dialog = this.dialog.open(DepartmentSaveComponent, {
            minWidth: '300px',
            data: { department }
        });
        dialog.afterClosed().subscribe(result => {
            if (result) {
                this.getDepartments();
            }
        });
    }

    deleteDepartment(department: Department) {
        const dialog = this.dialog.open(ConfirmationDialogComponent, {
            minWidth: '300px',
            data: {
                title: 'Usuń dział',
                message: `Czy jesteś pewien, że chce usunąć dział: ${department.name}?`,
                action: () => this.departmentService.delete(department.id)
            }
        });
        dialog.afterClosed().subscribe(result => {
            if (result) {
                this.getDepartments();
            }
        });
    }
}
