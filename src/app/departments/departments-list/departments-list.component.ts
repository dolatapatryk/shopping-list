import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from '../../services/departments.service';
import { Department } from '../../models/department';

@Component({
    selector: 'app-departments-layout',
    templateUrl: './departments-list.component.html',
    styleUrls: ['./departments-list.component.scss']
})
export class DepartmentsListComponent implements OnInit {
    departments: Department[];

    constructor(private departmentsService: DepartmentsService) {
    }

    ngOnInit(): void {
        this.departments = this.departmentsService.getDepartments();
    }

    addDepartment() {
        this.departmentsService.addDepartment({ id: 20, name: 'Test' });
    }
}
