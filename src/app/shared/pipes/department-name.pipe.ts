import { Pipe, PipeTransform } from '@angular/core';
import { DepartmentsService } from '../../services/departments.service';
import { Department } from '../../models/department';

@Pipe({
    name: 'departmentName'
})
export class DepartmentNamePipe implements PipeTransform {
    departments: Department[];

    constructor(private departmentsService: DepartmentsService) {
        this.departments = departmentsService.getDepartments();
    }

    transform(departmentId: number): string {
        const department = this.departments.find(dep => dep.id === departmentId);
        return department ? department.name : '';
    }
}
