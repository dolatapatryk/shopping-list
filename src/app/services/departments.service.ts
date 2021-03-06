import { Injectable } from '@angular/core';
import { Department } from '../models/department';
import departments from '../../assets/departments.json';

@Injectable({
    providedIn: 'root'
})
export class DepartmentsService {

    constructor() {
        console.log(':::departmests service constructor');
    }

    getDepartments(): Department[] {
        return departments;
    }

    addDepartment(department: Department) {
        departments.push(department);
    }
}
