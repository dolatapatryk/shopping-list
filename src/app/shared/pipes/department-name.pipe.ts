import { Pipe, PipeTransform } from '@angular/core';
import { Department } from '../../models/department';

@Pipe({
    name: 'departmentName'
})
export class DepartmentNamePipe implements PipeTransform {

    transform(departmentId: number, departments: Department[]): string {
        if (!departments) {
            return '';
        }
        const department = departments.find(dep => dep.id === departmentId);
        return department ? department.name : '';
    }
}
