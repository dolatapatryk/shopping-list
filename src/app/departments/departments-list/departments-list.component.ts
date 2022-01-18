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
        this.departmentService.findAll().subscribe(body => this.departments = body);
    }

    addDepartment() {
        // this.departmentService.addDepartment({ id: null, name: 'Test' })
        //     .subscribe(resp => console.log(':::resp', resp));
    }
}
