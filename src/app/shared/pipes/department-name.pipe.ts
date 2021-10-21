import { Pipe, PipeTransform } from '@angular/core';
import { DepartmentService } from '../../services/department.service';
import { Department } from '../../models/department';

@Pipe({
    name: 'departmentName'
})
export class DepartmentNamePipe implements PipeTransform {
    departments: Department[];

    constructor(private departmentService: DepartmentService) {
        this.departments = departmentService.getDepartments();
    }

    transform(departmentId: number): string {
        const department = this.departments.find(dep => dep.id === departmentId);
        return department ? department.name : '';
    }
}
