import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from '../../services/departments.service';
import { Department } from '../../models/department';

@Component({
    selector: 'app-departments-layout',
    templateUrl: './departments-layout.component.html',
    styleUrls: ['./departments-layout.component.scss']
})
export class DepartmentsLayoutComponent implements OnInit {
    departments: Department[];

    constructor(private departmentsService: DepartmentsService) {
    }

    ngOnInit(): void {
        this.departments = this.departmentsService.getDepartments();
    }
}
