import { Injectable } from '@angular/core';
import { Department } from '../models/department';

@Injectable()
export class DepartmentsService {

    getDepartments(): Department[] {
        return [
            { id: 1, name: 'Lodówki 1', description: 'ser, szynka itp.' },
            { id: 2, name: 'Lodówki 2', description: 'mięso, pizze mrożone itp.' },
            { id: 3, name: 'napoje-woda' },
            { id: 4, name: 'warzywa/owoce' }
        ];
    }
}
