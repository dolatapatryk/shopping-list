import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../services/department.service';
import { Department } from '../../models/department';

@Component({
    selector: 'app-departments-layout',
    templateUrl: './departments-list.component.html',
    styleUrls: ['./departments-list.component.scss']
})
export class DepartmentsListComponent implements OnInit {
    departments: Department[];

    constructor(private departmentService: DepartmentService) {
    }

    ngOnInit(): void {
        this.departments = this.departmentService.getDepartments();
    }

    addDepartment() {
        this.departmentService.addDepartment({ id: 20, name: 'Test' });
    }
}
